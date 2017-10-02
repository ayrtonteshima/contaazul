const incrementPage = ({ perPage }) => {
  let page = 0;

  const inc = (item, ind) => {
    page = ind % perPage === 0 ? page += 1 : page;
    return Object.assign({}, item, { page });
  };

  return inc;
};

const paginationReducer = (state) => {
  const { data } = state;
  const newData = data.map(incrementPage(state));

  return Object.assign({}, state, { data: newData });
};

export default paginationReducer;

