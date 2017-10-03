import datalistReducer from './datalist';
import paginateReducer from './paginate';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAGINATE':
      return paginateReducer(state, action);
    case 'SET_PAGE':
    case 'CREATE_ITEM':
    case 'DELETE_ITEM':
    case 'GET_ALL':
      return datalistReducer(state, action);
    default:
      return state;
  }
};

export default reducer;
