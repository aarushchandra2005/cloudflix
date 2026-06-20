const express = require('express');
const router = express.Router();

const Like = require('../models/Like');

router.post('/:userId/:videoId', async (req,res)=>{

  const existing = await Like.findOne({
    where:{
      userId:req.params.userId,
      videoId:req.params.videoId
    }
  });

  if(existing){
    await existing.destroy();

    return res.json({
      liked:false
    });
  }

  await Like.create({
    userId:req.params.userId,
    videoId:req.params.videoId
  });

  res.json({
    liked:true
  });
});

module.exports = router;

