const deleteItem = (state, { payload }) => {
  const totalToSearch = payload.itensIds.length;
  const { data } = state;
  const totalItems = data.length;
  const indexesFound = [];

  for (let i = 0; i < totalItems; i += 1) {
    if (indexesFound.length >= totalToSearch) break;

    if (payload.itensIds.indexOf(data[i].id) !== -1) {
      indexesFound.push(i);
    }
  }

  return Object.assign({}, state, {
    data: data.filter((item, index) => (
      indexesFound.indexOf(index) === -1
    )),
  });
};

const datalistReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return Object.assign({}, state, {
        term: null,
        data: [action.payload.item, ...state.data],
      });
    case 'DELETE_ITEM':
      return deleteItem(state, action);
    default:
      return state;
  }
};

export default datalistReducer;
