const templateItem = itensWillBeDeleted => (options, index) => {
  if (!options.filtered) return '';

  const {
    id,
    marca,
    combustivel,
    placa,
    valor,
    modelo,
    imagem,
  } = options;

  const checkToDelete = itensWillBeDeleted.indexOf(id) !== -1;
  const activeClass = checkToDelete ? 'contaazul__table__item--active' : '';
  return (
    `<tr class="contaazul__table__item ${activeClass}">
      <td>
        <input
          data-id="${id}"
          class="contaazul__checkbox"
          type="checkbox"
          name="car_plate[${index}]"
          ${checkToDelete ? 'checked="checked"' : ''}
        />
      </td>
      <td>${placa}</td>
      <td class="contaazul__hide-for-mobile">${modelo}</td>
      <td>${marca}</td>
      <td class="contaazul__hide-for-mobile">${imagem || 'Sem foto'}</td>
      <td>${combustivel}</td>
      <td class="contaazul__align-right contaazul__hide-for-mobile">${valor}</td>
    </tr>`
  );
};

const templateEmptyTable = () => (
  `<tr class="contaazul__table__item">
      <td colspan="7" align="center">Sem resutado</td>
    </td>`
);

const templateItemPagination = currentPage => ind => (
  `<li
    data-page="${ind + 1}"
    class="contaazul__pagination__item
    ${ind === (currentPage - 1) ? 'contaazul__pagination__item--active' : ''}"
  >
    <a class="contaazul__pagination__item__link" href="#" title="">${ind + 1}</a>
  </li>`
);

const templatePagination = (totalPages, currentPage) => (
  `
    <li data-page="1" class="contaazul__pagination__item">
      <a class="contaazul__pagination__item__link" href="#" title="">&laquo;</a>
    </li>
    ${Array.from(Array(totalPages).keys()).map(templateItemPagination(currentPage)).join('')}
    <li data-page="${totalPages}" class="contaazul__pagination__item">
      <a class="contaazul__pagination__item__link" href="#" title="">&raquo;</a>
    </li>
  `
);

export {
  templateItem,
  templatePagination,
  templateEmptyTable,
};
