import './../scss/main.scss';
import * as actions from './actions';
import {
  templateItem,
  templatePagination,
} from './template';

const renderItems = ({ data }) => {
  const html = data.map(templateItem).join('');
  document.querySelector('.contaazul__table__body').innerHTML = html;
};

const renderPagination = ({ totalPages, currentPage }) => {
  const html = totalPages > 1 ?
    templatePagination(totalPages, currentPage) :
    '';
  document.querySelector('.contaazul__pagination').innerHTML = html;
};

const renderGetAllFleets = (state) => {
  renderItems(state);
  renderPagination(state);
};

actions.getAllFleets()
  .then(renderGetAllFleets);

