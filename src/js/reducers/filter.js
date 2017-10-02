const filterItem = term => (item) => {
  const filtered = !term;
  return Object.assign({}, item, { filtered });
};

const filterReducer = (state) => {
  const { term, data } = state;
  const newData = data.map(filterItem(term));

  return Object.assign({}, state, {
    data: newData,
  });
};

export default filterReducer;

