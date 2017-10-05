const mergeCorrectPage = (state) => {
  const currentPage = (state.currentPage <= 0) ? 1 : state.currentPage;
  return Object.assign({}, state, {
    currentPage: currentPage > state.totalPages ?
      state.totalPages :
      currentPage,
  });
};

const incrementPage = ({ perPage }) => {
  let page = -1;
  let ind = -1;
  let currentPage = 0;

  const inc = (item) => {
    ind = item.filtered ? ind += 1 : ind;
    currentPage = (ind % perPage === 0 && item.filtered) ? currentPage += 1 : currentPage;
    page = item.filtered ? currentPage : -1;
    return Object.assign({}, item, { page });
  };

  return inc;
};

const paginate = (state) => {
  const { data, perPage } = state;
  const newData = data.map(incrementPage(state));

  const totalPages = Math.ceil(newData.filter(({ page }) => page !== -1).length / perPage);

  return mergeCorrectPage(Object.assign({}, state, {
    totalPages,
    data: newData,
  }));
};

export default paginate;
