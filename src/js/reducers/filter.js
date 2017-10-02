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

const filterReducer = (state) => {
  const { term, data } = state;
  const newData = data.map(filterItem(term));

  return Object.assign({}, state, {
    data: newData,
  });
};

export default filterReducer;

