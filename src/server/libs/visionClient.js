const vision = require('@google-cloud/vision');

const visionClient = vision({
  projectId: 'cloud-vision-demo-173007'
});

module.exports = visionClient;