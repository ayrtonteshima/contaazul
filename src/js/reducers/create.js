const createReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return Object.assign({}, state, {
        term: null,
        data: [action.payload.item, ...state.data],
      });
    default:
      return state;
  }
};

export default createReducer;
