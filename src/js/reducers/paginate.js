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

  return Object.assign({}, state, {
    totalPages,
    data: newData,
  });
};

const currentPage = (state, { payload }) => (
  Object.assign({}, state, {
    currentPage: payload.page
  })
);

const paginateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return currentPage(state, action);
    default:
      return paginate(state);
  };
};

export default paginateReducer;

