const sequelize = require('./src/models');
const Video = require('./src/models/Video');

async function seed() {
  try {
    await sequelize.authenticate();

    await Video.bulkCreate([
      {
        title: 'Doctor Strange',
        description: 'A brilliant surgeon discovers the mystic arts.',
        category: 'Action',
        year: 2016,
        rating: 'PG-13',
        s3Key: 'videos/DrStrange.mp4',
        thumbnailKey: 'thumbnails/DrStrange.jpg',
        bannerKey: 'banners/DrStrange-B.jpg',
        views: 0,
        likes: 0,
        isPublic: true
      },
      {
        title: 'Iron Man',
        description: 'Tony Stark becomes Iron Man.',
        category: 'Action',
        year: 2008,
        rating: 'PG-13',
        s3Key: 'videos/Ironman-1.mp4',
        thumbnailKey: 'thumbnails/Ironman-1.png',
        bannerKey: 'banners/Ironman1_B.jpg',
        views: 0,
        likes: 0,
        isPublic: true
      },
      {
        title: 'Iron Man 2',
        description: 'Tony Stark faces new threats.',
        category: 'Action',
        year: 2010,
        rating: 'PG-13',
        s3Key: 'videos/Ironman-2.mp4',
        thumbnailKey: 'thumbnails/Ironman-2.jpg',
        bannerKey: 'banners/Ironman-2_B.webp',
        views: 0,
        likes: 0,
        isPublic: true
      },
      {
        title: 'Joker',
        description: 'The origin story of Gotham’s most notorious villain.',
        category: 'Drama',
        year: 2019,
        rating: 'R',
        s3Key: 'videos/Joker.mp4',
        thumbnailKey: 'thumbnails/Joker.jpg',
        bannerKey: 'banners/Joker_B.jpeg',
        views: 0,
        likes: 0,
        isPublic: true
      },
      {
        title: 'Superman',
        description: 'The legendary superhero protects Earth.',
        category: 'Action',
        year: 2013,
        rating: 'PG-13',
        s3Key: 'videos/Superman.mp4',
        thumbnailKey: 'thumbnails/Superman.webp',
        bannerKey: 'banners/Superman_B.jpeg',
        views: 0,
        likes: 0,
        isPublic: true
      },
      {
        title: 'Titanic',
        description: 'A timeless romance aboard the Titanic.',
        category: 'Drama',
        year: 1997,
        rating: 'PG-13',
        s3Key: 'videos/Titanic.mp4',
        thumbnailKey: 'thumbnails/Titanic.webp',
        bannerKey: 'banners/Titanic_B.png',
        views: 0,
        likes: 0,
        isPublic: true
      },
	{
  title: 'Avengers: Age of Ultron',
  description: 'The Avengers reunite to stop Ultron.',
  category: 'Action',
  year: 2015,
  rating: 'PG-13',
  s3Key: 'videos/Avenger_2.mp4',
  thumbnailKey: 'thumbnails/Avenger_2.avif',
  bannerKey: 'banners/Avenger_2_B.jpg',
  views: 0,
  likes: 0,
  isPublic: true
},
{
  title: "Harry Potter and the Philosopher's Stone",
  description: 'Harry discovers he is a wizard and enters Hogwarts.',
  category: 'Fantasy',
  year: 2001,
  rating: 'PG',
  s3Key: "videos/Harry_Potter_and_the_Philosopher's_Stone.mp4",
  thumbnailKey: "thumbnails/Harry_Potter_and_the_Philosopher's_Stone.webp",
  bannerKey: "banners/Harry_Potter_and_the_Philosopher's_Stone_B.jpeg",
  views: 0,
  likes: 0,
  isPublic: true
},
{
  title: 'Harry Potter and the Prisoner of Azkaban',
  description: 'Harry faces Sirius Black and dark secrets.',
  category: 'Fantasy',
  year: 2004,
  rating: 'PG',
  s3Key: 'videos/Harry_Potter_and_the_Prisoner_of_Azkaban.mp4',
  thumbnailKey: 'thumbnails/Harry_Potter_and_the_Prisoner_of_Azkaban.jpeg',
  bannerKey: 'banners/Harry_Potter_and_the_Prisoner_of_Azkaban_B.jpeg',
  views: 0,
  likes: 0,
  isPublic: true
},
{
  title: 'Harry Potter and the Deathly Hallows',
  description: 'The final battle against Voldemort begins.',
  category: 'Fantasy',
  year: 2011,
  rating: 'PG-13',
  s3Key: 'videos/Harry_Potter_and_the_Deathly_Hallows.mp4',
  thumbnailKey: 'thumbnails/Harry_Potter_and_the_Deathly_Hallows.jpg',
  bannerKey: 'banners/Harry_Potter_and_the_Deathly_Hallows_B.png',
  views: 0,
  likes: 0,
  isPublic: true
},
{
  title: 'Khat Khat',
  description: 'Custom uploaded video.',
  category: 'General',
  year: 2025,
  rating: 'PG',
  s3Key: 'videos/Khat_Khat.mp4',
  thumbnailKey: 'thumbnails/Khat_Khat.png',
  bannerKey: 'banners/Khat_Khat_B.png',
  views: 0,
  likes: 0,
  isPublic: true
}
    ]);

    console.log('✅ Movies inserted successfully');
    process.exit();

  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

seed();
