import datalistReducer from './datalist';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
