const { Op } = require('sequelize');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const s3 = require('../config/s3');

const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');

const Video = require('../models/Video');

router.post(
  '/upload',
  upload.single('video'),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No video uploaded'
        });
      }

      const key = `videos/${uuidv4()}-${req.file.originalname}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: key,
          Body: req.file.buffer,
          ContentType: req.file.mimetype
        })
      );

      const videoUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

      const video = await Video.create({
        title: req.file.originalname,
        s3Key: key,
        category: 'General',
        views: 0,
        likes: 0,
        isPublic: true
      });

      res.json({
        success: true,
        videoUrl,
        video
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const where = {};

    if (req.query.search) {
      where.title = {
        [Op.like]: `%${req.query.search}%`
      };
    }

    if (req.query.category) {
      where.category = req.query.category;
    }

    const videos = await Video.findAll({
      where,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      count: videos.length,
      videos
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found'
      });
    }

    await video.increment('views');

    await video.reload();

    res.json({
      success: true,
      video
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Video.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({
      success: true,
      message: 'Video deleted'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
