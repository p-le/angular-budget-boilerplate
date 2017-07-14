const express = require('express');
const router = express.Router();
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

const visualRecognition = new VisualRecognitionV3({
  api_key: '9a4fdde5f35725f9475fb00c29f00df1cb5746b8',
  version_date: '2016-05-20'
});

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../public/watson/index.html'));
});

router.post('/analyze', (req, res) => {
  let existedResult = [];

  const params = {
    classifier_ids: req.body.classifiers,
    url: req.body.url
  };
  visualRecognition.classify(params, async (err, result) => {
    if (err) {
      console.log(err);
      res.json({ error: err });
    } else {
      
      const jsonResult = result.images.map((img, index) => ({
        url: img.resolved_url,
        classifiers: img.classifiers
      }));

      res.json(jsonResult);
    }
  });
});

module.exports = router;