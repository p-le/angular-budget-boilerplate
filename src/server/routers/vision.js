const express = require('express');
const request = require('sync-request');

const visionClient = require('../libs/visionClient');
const visionController = require('../controllers/vision.controller');
const router = express.Router();

router.post('/analyze', (req, res) => {
  const url = req.body.url;
  const types = req.body.types;

  // const test = request('GET', url);
  // console.log(test.headers.location);

  visionClient.detect(url, types)
    .then(data => {
      visionController.save(data);
      res.json({
        url: url,
        result: data
      });
    })
    .catch(error => {
      console.log(error);
      res.json({ error: JSON.stringify(error)});
    });
});

module.exports = router;