const mockFleets = require('./mock/fleetsMock'); 

const getAll = () => (
  Promise.resolve(mockFleets)
);

const save = (fleetData) => (
  Promise.resolve(fleetData)
);

const del = (id) => (
  Promise.resolve()
);

module.exports = {
  getAll,
  save,
  del,
}
