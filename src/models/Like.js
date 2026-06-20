const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Like = sequelize.define('Like', {
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
  }
});

module.exports = Like;
