const sequelize = require('./src/models');
const Video = require('./src/models/Video');

async function updateMovie() {
  try {
    await sequelize.authenticate();

    await Video.update(
      { category: 'Horror' },
      {
        where: {
          title: 'Khat Khat'
        }
      }
    );

    console.log('✅ Khat Khat updated to Horror');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updateMovie();
