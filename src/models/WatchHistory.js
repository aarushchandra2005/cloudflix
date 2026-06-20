const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const WatchHistory = sequelize.define('WatchHistory', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },

  videoId: {
    type: DataTypes.UUID,
    allowNull: false
  },

  progress: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = WatchHistory;
