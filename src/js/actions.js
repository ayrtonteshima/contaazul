import axios from 'axios';
import reducers from './reducers';
import { URL_BASE_API } from './../configs/urls';

let state;

const getAllFleets = () => (
  new Promise((resolve) => {
    const url = `${URL_BASE_API}/fleets`;

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

export {
  getAllFleets,
  addItemToBeDeleted,
};
