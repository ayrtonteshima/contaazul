const mockFleets = require('./mock/fleetsMock'); 

const getAll = () => (
  Promise.resolve(mockFleets)
);

const save = (fleetData) => (
  Promise.resolve(fleetData)
);

module.exports = {
  getAll,
  save,
}
