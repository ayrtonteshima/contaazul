const createReducer = (item, state) => (
  Object.assign({}, state, {
    data: [item, ...state.data],
  })
);

export default createReducer;
