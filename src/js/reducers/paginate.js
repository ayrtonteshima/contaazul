const incrementPage = ({ perPage }) => {
  let page = 0;

  const inc = (item, ind) => {
    page = ind % perPage === 0 ? page += 1 : page;
    return Object.assign({}, item, { page });
  };

  return inc;
};

const paginationReducer = (state) => {
  const { data, perPage } = state;
  const newData = data.map(incrementPage(state));

  const totalPages = Math.ceil(newData.filter(({ page }) => !!page).length / perPage);

  return Object.assign({}, state, {
    totalPages,
    data: newData
  });
};

export default paginationReducer;

