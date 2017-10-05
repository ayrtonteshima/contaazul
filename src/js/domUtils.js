const getCurrentPageIds = () =>
  [].slice.call(document.querySelectorAll('.contaazul__checkbox'))
    .map(item => parseInt(item.getAttribute('data-id'), 10));

const toggleDisabledBtnDelete = ({ itensWillBeDeleted }) => {
  document.querySelector('.contaazul__danger')
    .disabled = itensWillBeDeleted.length <= 0;
};

const toggleMarkedAllItems = ({ itensWillBeDeleted }) => {
  const currentPageIds = getCurrentPageIds();

  const mark = currentPageIds.filter(id => (
    itensWillBeDeleted.indexOf(id) !== -1
  ));

  document.querySelector('.contaazul__checkbox--all')
    .checked = currentPageIds.length === mark.length;
};

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

  toggleMarkedAllItems({ itensWillBeDeleted });

  toggleDisabledBtnDelete({ itensWillBeDeleted });
};

const toggleModal = show => () =>
  document.querySelector('.contaazul__modal')
    .classList.toggle('contaazul__modal--opened', show);

export {
  getCurrentPageIds,
  toggleDisabledBtnDelete,
  toggleMarkedAllItems,
  markLinesToBeDeleted,
  toggleModal,
};

