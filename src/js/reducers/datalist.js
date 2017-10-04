import { filterHelper, paginateHelper } from './helpers';
import { compose } from './../helpers';

const filterPaginate = compose(paginateHelper, filterHelper);

const deleteItem = (state, { payload }) => {
  const totalToSearch = payload.itensIds.length;
  const { data } = state;
  const totalItems = data.length;
  const indexesFound = [];

  for (let i = 0; i < totalItems; i += 1) {
    if (indexesFound.length >= totalToSearch) break;

    if (payload.itensIds.indexOf(data[i].id) !== -1) {
      indexesFound.push(i);
    }
  }

  return Object.assign({}, state, {
    data: data.filter((item, index) => (
      indexesFound.indexOf(index) === -1
    )),
  });
};

const addItemToBeDeleted = ({ itensWillBeDeleted }, ids) => {
  const res = ids.map(id => (
    itensWillBeDeleted.indexOf(id) !== -1 ?
      itensWillBeDeleted.filter(idList => idList !== id) :
      [...itensWillBeDeleted, id]
  ));
  return res.reduce((prev, current) => prev.concat(current));
};

const datalistReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return filterPaginate(Object.assign({}, state, {
        term: null,
        data: action.payload.data,
      }));
    case 'CREATE_ITEM':
      return filterPaginate(Object.assign({}, state, {
        term: null,
        data: [action.payload.item, ...state.data],
      }));
    case 'ADD_LIST_DELETE_ITEM':
      return Object.assign({}, state, {
        itensWillBeDeleted: addItemToBeDeleted(state, action.payload.id),
      });
    case 'DELETE_ITEM':
      return filterPaginate(deleteItem(state, action));
    case 'SET_PAGE':
      return Object.assign({}, state, {
        currentPage: action.payload.page,
      });
    default:
      return state;
  }
};

export default datalistReducer;
