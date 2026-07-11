- CloudFlix — Scalable Video Streaming Platform


A full-stack Netflix-clone built with React.js, Node.js, and AWS cloud infrastructure — featuring real video streaming, JWT authentication, Docker containerization, and a complete CI/CD pipeline.


🌐 Live Demo: dpqhdztucaz15.cloudfront.net



# Architecture

Users
  │
  ▼
CloudFront CDN (HTTPS)
  │
  ├──► S3 Bucket (React Frontend)
  │
  └──► EC2 Instance (Backend API)
         │
         ├── Nginx (Reverse Proxy)
         ├── Docker Container (Node.js/Express)
         └── AWS RDS MySQL (Database)
                │
                └── AWS S3 (Videos & Images)


# Tech Stack

Frontend

TechnologyPurposeReact.js + ViteUI FrameworkTailwind CSSStylingFramer MotionAnimationsReact RouterClient-side routingAxiosHTTP requests

Backend

TechnologyPurposeNode.js + ExpressREST API serverSequelize ORMDatabase managementJWTAuthenticationBcrypt.jsPassword hashingHelmet.jsSecurity headersCORSCross-origin handling

AWS Infrastructure

ServicePurposeEC2 (t3.micro)Backend serverRDS MySQLProduction databaseS3Video/image storage + frontend hostingCloudFrontGlobal CDNECRDocker image registry

DevOps

ToolPurposeDockerContainerizationGitHub ActionsCI/CD pipelineNginxReverse proxyPM2Process management


# Features


- Real Video Streaming — videos served from AWS S3 via CloudFront CDN
- JWT Authentication — secure login/register with bcrypt password hashing
- Mobile Responsive — fully optimized for all screen sizes
- Continue Watching — tracks watch progress using localStorage
- Dynamic Hero Banner — random 5 movies selected on each page load
- Keyboard Controls — arrow keys, space, F (fullscreen), M (mute)
- Notifications — bell icon with notification center
- Profile Customization — avatar color picker, editable display name
- Search — real-time search across all movies
- Watchlist — add/remove movies from personal watchlist
- Like System — like movies and track liked content
- Categories — browse by genre (Action, Drama, Sci-Fi, etc.)



# CI/CD Pipeline

Every git push to main triggers the following automated workflow:

git push
    │
    ▼
GitHub Actions
    │
    ├── 1. Checkout code
    ├── 2. Configure AWS credentials
    ├── 3. Login to Amazon ECR
    ├── 4. Build Docker image (linux/amd64)
    ├── 5. Push image to ECR
    └── 6. SSH into EC2 → pull new image → restart container

Zero manual deployment steps required.


# Local Development Setup

Prerequisites


Node.js 20+
MySQL
AWS account (for S3/RDS)
Docker (optional)


Backend Setup

bashcd backend
npm install
cp .env.example .env   # fill in your values
npm run dev

Frontend Setup

bashcd frontend
npm install
echo "VITE_API_URL=http://localhost:5001" > .env
npm run dev

Environment Variables (Backend)

envPORT=5001
DB_HOST=your-rds-endpoint
DB_PORT=3306
DB_NAME=cloudflix
DB_USER=admin
DB_PASS=your-password
JWT_SECRET=your-secret
JWT_EXPIRES_IN=7d
AWS_REGION=ap-south-1
AWS_BUCKET_NAME=your-bucket
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret


# Docker

bash# Build image
docker build -t cloudflix-backend .

# Run container
docker run -d --name cloudflix --env-file .env -p 5001:5001 cloudflix-backend


 #Project Structure

cloudflix/
├── frontend/
│   ├── src/
│   │   ├── components/     # Navbar, HeroBanner, VideoCard, VideoRow
│   │   ├── pages/          # Home, VideoPlayer, Login, Register, Profile
│   │   ├── hooks/          # useVideos, useContinueWatching
│   │   ├── context/        # AuthContext
│   │   └── services/       # api.js, auth.js
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   ├── controllers/    # authController, videoController
    │   ├── models/         # User, Video, Watchlist, Like, WatchHistory
    │   ├── routes/         # auth, videos, profile, likes
    │   └── middleware/     # auth, upload
    ├── Dockerfile
    └── .github/
        └── workflows/
            └── deploy.yml  # GitHub Actions CI/CD


# Security


JWT tokens with expiry
Bcrypt password hashing (salt rounds: 10)
Helmet.js security headers
CORS configuration
AWS security groups restricting port access
Environment variables for all secrets (never hardcoded)



# Author

Aarush Chandra


- GitHub: @aarushchandra2005
- LinkedIn: aarush-chandra-44a73330b
- Email: aarushchandra1111@gmail.com



# License

This project is for educational and portfolio purposes.
