import './../scss/main.scss';
import * as actions from './actions';
import render from './renders';
import { delegate } from './helpers';
import {
  getCurrentPageIds,
  markLinesToBeDeleted,
  toggleDisabledBtnDelete,
  toggleMarkedAllItems,
  toggleModal,
} from './domUtils';

const handleDeleteCheckbox = (event) => {
  const { target } = event;

  const id = parseInt(target.getAttribute('data-id'), 10);

  actions.addItemToBeDeleted(id)
    .then(markLinesToBeDeleted);
};

const handleDeleteAllCheckbox = (event) => {
  const itensIds = getCurrentPageIds();

  const { checked } = event.target;

  actions.addAllItemsToBeDeleted(itensIds, checked)
    .then(markLinesToBeDeleted);
};

const handleBtnDelete = () => {
  actions.deleteItems()
    .then(render)
    .then((state) => {
      toggleDisabledBtnDelete(state);
      toggleMarkedAllItems(state);
    });
};

const handleCreateItem = (event) => {
  event.preventDefault();
  const textFields = [].slice.call(document.querySelectorAll('.contaazul__form__textfield'));

  const itemToSave = textFields
    .map(({ name, value }) => ({ [name]: value }))
    .reduce((prev, next) => Object.assign({}, prev, next));

  actions.saveItem(itemToSave)
    .then(render)
    .then(toggleModal(false));
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
    .then(render)
    .then(toggleMarkedAllItems);
};

const bindEvents = () => {
  delegate('click', 'contaazul__pagination__item', handleClickPagination);
  delegate('submit', 'contaazul__search__form', handleSubmitSearch);
  delegate('submit', 'contaazul__form', handleCreateItem);
  delegate('click', 'contaazul__modal__curtain', toggleModal(false));
  delegate('click', 'contaazul__modal__box__close', toggleModal(false));
  delegate('click', 'contaazul__success', toggleModal(true));
  delegate('click', 'contaazul__danger', handleBtnDelete);
  delegate('change', 'contaazul__checkbox', handleDeleteCheckbox);
  delegate('change', 'contaazul__checkbox--all', handleDeleteAllCheckbox);
};

bindEvents();

actions.getAllFleets()
  .then(render);
