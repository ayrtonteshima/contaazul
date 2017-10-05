import axios from 'axios';
import reducers from './reducers';
import { URL_BASE_API } from './../configs/urls';

let state;

const url = `${URL_BASE_API}/fleets`;

const getAllFleets = () => (
  new Promise((resolve) => {
    const resolveAllFleets = (result) => {
      state = reducers(undefined, {
        type: 'GET_ALL',
        payload: result.data,
      });
      resolve(state);
    };

    return axios.get(url)
      .then(resolveAllFleets);
  })
);

const addItemToBeDeleted = (id) => {
  state = reducers(state, {
    type: 'ADD_LIST_DELETE_ITEM',
    payload: {
      id,
    },
  });
  return Promise.resolve(state);
};

const deleteItens = () => {
  const { itensWillBeDeleted } = state;
  const mapPromises = itemId => axios.delete(`${url}/${itemId}`);
  const promiseList = Promise.all(itensWillBeDeleted.map(mapPromises));

  return new Promise((resolve) => {
    promiseList.then(() =>
      reducers(state, {
        type: 'DELETE_ITEM',
        payload: {
          itensIds: itensWillBeDeleted,
        },
      }))
      .then((result) => {
        state = result;
        resolve(state);
      });
  });
};

const saveItem = item => (
  new Promise((resolve) => {
    const itemWithId = Object.assign({}, item, {
      id: state.data.length + 1,
    });

    axios.post(url, item)
      .then(() => {
        state = reducers(state, {
          type: 'CREATE_ITEM',
          payload: { item: itemWithId },
        });
        return state;
      })
      .then((result) => {
        state = result;
        resolve(state);
      });
  })
);

const filter = term => (
  new Promise((resolve) => {
    state = reducers(state, {
      type: 'FILTER',
      payload: { term },
    });
    resolve(state);
  })
);

export {
  getAllFleets,
  addItemToBeDeleted,
  deleteItens,
  saveItem,
  filter,
};
