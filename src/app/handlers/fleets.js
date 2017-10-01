const fleetsStore = require('./../stores/fleets');

const handleGetFleets = (req, res) => (
  fleetsStore.getAll()
    .then(data => res.json({
      statusCode: 200,
      data,
    }))
);

module.exports = {
  handleGetFleets,
};

