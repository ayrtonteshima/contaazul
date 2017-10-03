const createReducer = (item, state) => (
  Object.assign({}, state, {
    term: null,
    data: [item, ...state.data],
  })
);

export default createReducer;
