import './../scss/main.scss';
import * as actions from './actions';
import { renderItem } from './template';

const render = ({ data }) => {
  const html = data.map(renderItem).join('');
  document.querySelector('.contaazul__table__body').innerHTML = html;
};

actions.getAllFleets()
  .then(render);

