require('dotenv').config();
const sequelize = require('./models');

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database Connected');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Database Error:', err);
    process.exit(1);
  });
