import datalistReducer from './datalist';
import initialState from './initialState';

const reducer = (state = initialState, action) =>
  datalistReducer(state, action);

export default reducer;
