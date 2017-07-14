const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

const visionClient = require('../libs/visionClient');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../public/index.html'));
});

router.post('/analyze', (req, res) => {
  const url = req.body.url;
  const types = req.body.types;

  visionClient.detect(url, types)
    .then(data => {
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

router.post('/analyzeFile', (req, res) => {
  const form = new formidable.IncomingForm();
  let uploadFile;
  let types;

  form.parse(req);

  form.on('fileBegin', function (name, file) {
    file.path = path.resolve(__dirname, '../../../public/images/' + file.name);
  });

  form.on('file', (name, file) => {
    uploadFile = file;
  });

  form.on('field', (name, field) => {
    types = field;
  });

  form.on('end', () => {
    const PORT = process.env.PORT || 80;
    const url = `http://${req.get('host')}:${PORT}/images/${uploadFile.name}`;
    const imageFile = fs.readFileSync(uploadFile.path);
    const encoded = new Buffer(imageFile, 'base64');
    types = types.split(',');

    visionClient.detect(encoded, types)
      .then(data => {
        res.json({
          url: url,
          result: data
        });
      })
      .catch(error => {
        res.json({ error: JSON.stringify(error)});
      });

  });
  
});

module.exports = router;