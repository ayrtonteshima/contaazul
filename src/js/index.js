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
  item.querySelector('.contaazul__checkbox').checked = contains; // eslint-disable-line no-param-reassign
};

const markLinesToBeDeleted = ({ itensWillBeDeleted }) => {
  const items = [].slice.call(document.querySelectorAll('.contaazul__table__item'));

  items.forEach(markLineToBeDeleted(itensWillBeDeleted));

  document.querySelector('.contaazul__checkbox--all')
    .checked = itensWillBeDeleted.length === items.length;

  document.querySelector('.contaazul__danger')
    .disabled = itensWillBeDeleted.length <= 0;
};

const handleDeleteCheckbox = (event) => {
  const { target } = event;

  const id = parseInt(target.getAttribute('data-id'), 10);

  actions.addItemToBeDeleted(id)
    .then(markLinesToBeDeleted);
};

const handleDeleteAllCheckbox = (event) => {
  const items = [].slice.call(document.querySelectorAll('.contaazul__checkbox'));
  const itensIds = items.map(item => parseInt(item.getAttribute('data-id'), 10));

  const { checked } = event.target;

  actions.addAllItemsToBeDeleted(itensIds, checked)
    .then(markLinesToBeDeleted);
};

const handleBtnDelete = () => {
  actions.deleteItems()
    .then(render)
    .then(() => {
      document.querySelector('.contaazul__danger').disabled = true;
    });
};

const handleToggleModal = show => () =>
  document.querySelector('.contaazul__modal')
    .classList.toggle('contaazul__modal--opened', show);


const handleCreateItem = (event) => {
  event.preventDefault();
  const textFields = [].slice.call(document.querySelectorAll('.contaazul__form__textfield'));

  const itemToSave = textFields
    .map(({ name, value }) => ({ [name]: value }))
    .reduce((prev, next) => Object.assign({}, prev, next));

  actions.saveItem(itemToSave)
    .then(render)
    .then(handleToggleModal(false));
};

const handleSubmitSearch = (event) => {
  event.preventDefault();
  const { value } = document.querySelector('.contaazul__search__textfield');

  actions.filter(value)
    .then(render);
};

const handleClickPagination = (event) => {
  event.preventDefault();
  event.stopPropagation();

  let { target } = event;

  target = target.classList.contains('contaazul__pagination__item') ?
    target :
    target.parentNode;

  const page = parseInt(target.getAttribute('data-page'), 10);

  actions.setPaginationPage(page)
    .then(render);
};

const bindEvents = () => {
  delegate('click', 'contaazul__pagination__item', handleClickPagination);
  delegate('submit', 'contaazul__search__form', handleSubmitSearch);
  delegate('submit', 'contaazul__form', handleCreateItem);
  delegate('click', 'contaazul__modal__curtain', handleToggleModal(false));
  delegate('click', 'contaazul__modal__box__close', handleToggleModal(false));
  delegate('click', 'contaazul__success', handleToggleModal(true));
  delegate('click', 'contaazul__danger', handleBtnDelete);
  delegate('change', 'contaazul__checkbox', handleDeleteCheckbox);
  delegate('change', 'contaazul__checkbox--all', handleDeleteAllCheckbox);
};

bindEvents();

actions.getAllFleets()
  .then(render);
