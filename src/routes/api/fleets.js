const express = require('express');
const router = express.Router();

const {
  handleGETFleets,
  handlePOSTFleets,
} = require('./../../app/handlers/fleetsHandler');

router.get('/api/v1/fleets', handleGETFleets);
router.post('/api/v1/fleets', handlePOSTFleets);

module.exports = router;
