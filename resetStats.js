const sequelize = require('./src/models');
const Video = require('./src/models/Video');

async function resetStats() {
  try {
    await sequelize.authenticate();

    await Video.update(
      {
        views: 0,
        likes: 0
      },
      {
        where: {}
      }
    );

    console.log('✅ All views and likes reset');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

resetStats();

