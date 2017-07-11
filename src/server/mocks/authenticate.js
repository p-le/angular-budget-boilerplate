const express = require('express');
const router = express.Router();

router.post('/authenticate', (req, res) => {
  setTimeout(() => {
    res.json({
      email: 'p-le@dimage.co.jp'
    });
  }, 3000);
});

module.exports = router;