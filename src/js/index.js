import './../scss/main.scss';
import * as actions from './actions';
import {
  templateItem,
  templatePagination,
} from './template';
import { compose } from './helpers';

const renderItems = (state) => {
  const { data } = state;
  const html = data.map(templateItem).join('');
  document.querySelector('.contaazul__table__body').innerHTML = html;

  return state;
};

const renderPagination = (state) => {
  const { totalPages, currentPage } = state;
  const html = totalPages > 1 ?
    templatePagination(totalPages, currentPage) :
    '';
  document.querySelector('.contaazul__pagination').innerHTML = html;

  return state;
};

const renderGetAllFleets = compose(renderPagination, renderItems);

actions.getAllFleets()
  .then(renderGetAllFleets);

