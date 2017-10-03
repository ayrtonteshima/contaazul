const deleteReducer = (itensIds, state) => {
  const totalToSearch = itensIds.length;
  const { data } = state;
  const totalItems = data.length;
  const indexesFound = [];

  for (let i = 0; i < totalItems; i += 1) {
    if (indexesFound.length >= totalToSearch) break;

    if (itensIds.indexOf(data[i].id) !== -1) {
      indexesFound.push(i);
    }
  }

  return Object.assign({}, state, {
    data: data.filter((item, index) => (
      indexesFound.indexOf(index) === -1
    )),
  });
};

export default deleteReducer;
