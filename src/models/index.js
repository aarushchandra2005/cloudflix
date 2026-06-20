require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',

    logging: console.log,

    dialectOptions: {
      connectTimeout: 10000
    },

    pool: {
      max: 5,
      min: 0,
      acquire: 10000,
      idle: 10000
    }
  }
);

module.exports = sequelize;
