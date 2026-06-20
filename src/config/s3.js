require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');

console.log('AWS_REGION:', process.env.AWS_REGION);
console.log('ACCESS_KEY:', process.env.AWS_ACCESS_KEY_ID?.substring(0, 8));
console.log('SECRET_EXISTS:', !!process.env.AWS_SECRET_ACCESS_KEY);

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

module.exports = s3;

