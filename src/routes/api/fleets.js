const express = require('express');
const router = express.Router();

const { handleGetFleets } = require('@app/handlers/fleets');

router.get('/api/v1/fleets', handleGetFleets);

module.exports = router;
