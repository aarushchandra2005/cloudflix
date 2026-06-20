const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT
  },

  s3Key: {
    type: DataTypes.STRING,
    allowNull: false
  },

  thumbnailKey: {
    type: DataTypes.STRING
  },

  bannerKey: {
    type: DataTypes.STRING
  },

  year: {
    type: DataTypes.INTEGER
  },

  rating: {
    type: DataTypes.STRING
  },

  duration: {
    type: DataTypes.INTEGER
  },

  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  userId: {
    type: DataTypes.UUID
  },

  category: {
    type: DataTypes.STRING
  },

  isPublic: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Video;
