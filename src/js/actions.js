import axios from 'axios';
import reducers from './reducers';
import { URL_BASE_API } from './../configs/urls';

const getAllFleets = () => (
  new Promise((resolve) => {
    const url = `${URL_BASE_API}/fleets`;

    const resolveAllFleets = result => (
      resolve(reducers(undefined, {
        type: 'GET_ALL',
        payload: result.data,
      }))
    );

    return axios.get(url)
      .then(resolveAllFleets);
  })
);

export {
  getAllFleets,
};
