const templateItem = (options) => {
  const {
    marca,
    combustivel,
    placa,
    valor,
    modelo,
    imagem,
  } = options;

  return (
    `<tr class="contaazul__table__item">
      <td><input class="contaazul__checkbox" type="checkbox" name="car_plate[]" /></td>
      <td>${placa}</td>
      <td>${modelo}</td>
      <td class="contaazul__hide-for-mobile">${marca}</td>
      <td class="contaazul__hide-for-mobile">${imagem || 'Sem foto'}</td>
      <td class="contaazul__hide-for-mobile">${combustivel}</td>
      <td class="contaazul__align-right">${valor}</td>
    </tr>`
  );
};

export {
  templateItem,
};
