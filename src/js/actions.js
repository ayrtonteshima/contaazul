import axios from 'axios';
import reducers from './reducers';
import { URL_BASE_API } from './../configs/urls';

let state;

const url = `${URL_BASE_API}/fleets`;

const updateState = ({ type, payload }) => {
  state = reducers(state, { type, payload });
  return state;
};

const dispatch = ({ type, payload }) => (
  new Promise((resolve) => {
    resolve(updateState({ type, payload }));
  })
);

const getAllFleets = () => (
  new Promise((resolve) => {
    const resolveAllFleets = result => (
      resolve(updateState({
        type: 'GET_ALL',
        payload: result.data,
      }))
    );

    return axios.get(url)
      .then(resolveAllFleets);
  })
);

const deleteItems = () => {
  const { itensWillBeDeleted } = state;
  const mapPromises = itemId => axios.delete(`${url}/${itemId}`);
  const promiseList = Promise.all(itensWillBeDeleted.map(mapPromises));

  const deleteFn = (resolve) => {
    promiseList.then(() => (
      resolve(updateState({
        type: 'DELETE_ITEM',
        payload: {
          itensIds: itensWillBeDeleted,
        },
      }))
    ));
  };

  return new Promise(deleteFn);
};

const saveItem = item => (
  new Promise((resolve) => {
    const itemWithId = Object.assign({}, item, {
      id: state.data.length + 1,
    });

    axios.post(url, item)
      .then(() => (
        resolve(updateState({
          type: 'CREATE_ITEM',
          payload: { item: itemWithId },
        }))
      ));
  })
);

const addItemToBeDeleted = id => (
  dispatch({
    type: 'ADD_LIST_DELETE_ITEM',
    payload: { id },
  })
);

const filter = term => (
  dispatch({
    type: 'FILTER',
    payload: { term },
  })
);

const setPaginationPage = page => (
  dispatch({
    type: 'SET_PAGE',
    payload: { page },
  })
);

export {
  getAllFleets,
  addItemToBeDeleted,
  deleteItems,
  saveItem,
  filter,
  setPaginationPage,
};
