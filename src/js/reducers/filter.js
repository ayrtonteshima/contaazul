const testItemWithFilter = (item, term) => {
  const { combustivel, marca } = item;
  const strRegexp = `(${term.replace(/\s{1}/g, '|')})`;

  const regx = new RegExp(strRegexp, 'gi');

  const found = `${combustivel} ${marca}`.match(regx);

  return found;
};

const filterItem = term => (item) => {
  const found = term ?
    testItemWithFilter(item, term) :
    true;

  return Object.assign({}, item, {
    filtered: found,
  });
};

const itensFiltered = (state) => {
  const { term, data } = state;
  const newData = data.map(filterItem(term));

  return Object.assign({}, state, {
    data: newData,
  });
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER':
      return itensFiltered(state);
    default:
      return state;
  }
};

export default filterReducer;

