import './../scss/main.scss';
import * as actions from './actions';
import { templateItem } from './template';

const render = ({ data }) => {
  const html = data.map(templateItem).join('');
  document.querySelector('.contaazul__table__body').innerHTML = html;
};

actions.getAllFleets()
  .then(render);

