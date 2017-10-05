import {
  templateItem,
  templatePagination,
} from './template';
import { compose } from './helpers';

const renderItems = (state) => {
  const { data, currentPage } = state;

  const html = data
    .filter(item => item.page === currentPage)
    .map(templateItem).join('');

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

const render = compose(renderPagination, renderItems);

export default render;
