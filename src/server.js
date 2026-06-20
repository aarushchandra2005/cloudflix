const videoRoutes = require('./routes/videoRoutes');
const profileRoutes = require('./routes/profileRoutes');
const authRoutes = require('./routes/auth');
const likeRoutes = require('./routes/likeRoutes');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const sequelize = require('./models');

require('./models/User');
require('./models/Video');
require('./models/WatchHistory');

require('./models/Watchlist');

require('./models/Like');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/likes', likeRoutes);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'CloudFlix Backend Running'
  });
});

const PORT = process.env.PORT || 5001;

sequelize.authenticate()
  .then(async () => {
    console.log('✅ Database Connected');

await sequelize.sync();
    await sequelize.sync();
    console.log('✅ Models Synced');

    app.listen(PORT, () => {
      console.log(`🚀 CloudFlix server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database Error:', err);
  });
