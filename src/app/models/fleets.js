const mockFleets = require('./mock/fleets'); 

const getAll = () => (
  new Promise((resolve) => (
    resolve(mockFleets)
  ))
);

module.exports = {
  getAll,
}
