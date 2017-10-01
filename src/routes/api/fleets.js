const express = require('express');
const router = express.Router();

router.get('/api/v1/fleets', (req, res) => {
  res.send('ok');
});

module.exports = router;
