const mockFleets = require('./mock/fleetsMock'); 

const getAll = () => (
  new Promise((resolve) => (
    resolve(mockFleets)
  ))
);

module.exports = {
  getAll,
}
