const express = require('express');
const router = express.Router();

const {
  handleGETFleets,
  handlePOSTFleets,
  handleDELETEFleets,
} = require('./../../app/handlers/fleetsHandler');

router.get('/api/v1/fleets', handleGETFleets);

router.post('/api/v1/fleets', handlePOSTFleets);

router.delete('/api/v1/fleets/:id', handleDELETEFleets);

module.exports = router;
