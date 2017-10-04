import './../scss/main.scss';
import * as actions from './actions';
import render from './renders';
import { delegate } from './helpers';

const markLineToBeDeleted = itensWillBeDeleted => (item) => {
  const idItem = item
    .querySelector('.contaazul__checkbox')
    .getAttribute('data-id');

  const contains = itensWillBeDeleted.indexOf(parseInt(idItem, 10)) !== -1;

  item.classList.toggle('contaazul__table__item--active', contains);

  if (contains) {
    item.querySelector('.contaazul__checkbox')
      .setAttribute('checked', contains);
  }
};

const markLinesToBeDeleted = ({ itensWillBeDeleted }) => {
  const items = [].slice.call(document.querySelectorAll('.contaazul__table__item'));

  items.forEach(markLineToBeDeleted(itensWillBeDeleted));

  document.querySelector('.contaazul__checkbox--all')
    .checked = itensWillBeDeleted.length === items.length;
};

const handleDeleteCheckbox = (event) => {
  const { target } = event;

  const id = parseInt(target.getAttribute('data-id'), 10);

  actions.addItemToBeDeleted(id)
    .then(markLinesToBeDeleted);
};

const handleDeleteAllCheckbox = () => {
  const items = [].slice.call(document.querySelectorAll('.contaazul__checkbox'));
  const itensIds = items.map(item => parseInt(item.getAttribute('data-id'), 10));

  actions.addItemToBeDeleted(itensIds)
    .then(markLinesToBeDeleted);
};

const bindEvents = () => {
  delegate('change', 'contaazul__checkbox', handleDeleteCheckbox);
  delegate('change', 'contaazul__checkbox--all', handleDeleteAllCheckbox);
};

bindEvents();

actions.getAllFleets()
  .then(render);

