const fleets = require('./../models/fleets');

const getAll = () => (
  new Promise((resolve, reject) => {
    fleets.getAll()
      .then(resolve)
      .catch(console.log);
  })
);

module.exports = {
  getAll,
};
