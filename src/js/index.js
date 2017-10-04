import './../scss/main.scss';
import * as actions from './actions';
import {
  templateItem,
  templatePagination,
} from './template';
import { compose, delegate } from './helpers';

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

const render = compose(renderPagination, renderItems);

const markLinesToBeDeleted = ({ itensWillBeDeleted }) => {
  const items = [].slice.call(document.querySelectorAll('.contaazul__table__item'));

  items.forEach((item) => {
    const idItem = item
      .querySelector('.contaazul__checkbox')
      .getAttribute('data-id');

    const contains = itensWillBeDeleted.indexOf(parseInt(idItem, 10)) !== -1;

    item.classList.toggle('contaazul__table__item--active', contains);
    item.querySelector('.contaazul__checkbox').checked = contains;
  });
};

const handleDeleteCheckbox = (event) => {
  const { target } = event;

  let itemsIds = [parseInt(target.getAttribute('data-id'), 10)];
  let uncheckCheckboxAll = false;

  if (target.classList.contains('contaazul__checkbox--all')) {
    const items = [].slice.call(document.querySelectorAll('.contaazul__table__item'));
    uncheckCheckboxAll = true;
    itemsIds = items.map((item) => (
      parseInt(item
        .querySelector('.contaazul__checkbox')
        .getAttribute('data-id'), 10)
    ));
  }

  actions.addItemToBeDeleted(itemsIds)
    .then(markLinesToBeDeleted);
};

const bindEvents = () => {
  delegate('change', 'contaazul__checkbox', handleDeleteCheckbox);
};

bindEvents();

actions.getAllFleets()
  .then(render);

