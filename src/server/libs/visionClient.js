const vision = require('@google-cloud/vision');
const path = require('path');

const visionClient = vision({
  projectId: 'cloud-vision-demo-173007',
  keyFilename: path.resolve(__dirname, 'vision-1c7d60dd308f.json')
});

module.exports = visionClient;