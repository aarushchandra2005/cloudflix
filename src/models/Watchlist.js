const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Watchlist = sequelize.define('Watchlist', {
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

module.exports = Watchlist;
