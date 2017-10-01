const fleets = require('./../models/fleetsModel');

const getAll = () => (
  new Promise((resolve, reject) => {
    fleets.getAll()
      .then(resolve)
      .catch(({ message }) => {
        console.error(message);
        reject();
      });
  })
);

const save = (fleetData) => (
  new Promise((resolve, reject) => {
    fleets.save(fleetData)
      .then(resolve)
      .catch(({ message }) => {
        console.error(message);
        reject();
      });
  })
);

module.exports = {
  getAll,
  save,
};
