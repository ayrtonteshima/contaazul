import createReducer from './create';
import deleteReducer from './delete';
import filterReducer from './filter';
import paginateReducer from './paginate';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
    case 'PAGINATE':
      return paginateReducer(state, action);
    case 'CREATE_ITEM':
      return createReducer(state, action);
    case 'DELETE_ITEM':
      return deleteReducer(state, action);
    case 'FILTER':
      return filterReducer(state, action);
    default:
      return state;
  }
};

export default reducer;
