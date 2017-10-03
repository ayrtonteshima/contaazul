import paginateHelper from '../../../../src/js/reducers/helpers/paginate';

const expectTheItemIsOnTheCorrectPage = (result, perPage) => {
  for (let i = 0, j = 0; i < result.data.length; i +=1) {
    if (i % perPage === 0) {
      j += 1;
    }
    expect(result.data[i].page).toEqual(j);
  }
}

describe('Reducer pagination', () => {
  describe('sem filtro', () => {
    let state = {};
    let perPage = 2;
    beforeAll(() => {
      state = {
        perPage,
        data: [
          { marca: 'Volkswagen', combustivel: 'Gasolina', filtered: true },
          { marca: 'Chery', combustivel: 'Gasolina', filtered: true },
          { marca: 'Honda', combustivel: 'Flex', filtered: true },
          { marca: 'Toyota', combustivel: 'Gasolina', filtered: true },
          { marca: 'Toyota', combustivel: 'Flex', filtered: true },
          { marca: 'Volkswagen', combustivel: 'alcool', filtered: true },
          { marca: 'Chery', combustivel: 'Alcool', filtered: true },
          { marca: 'Chery', combustivel: 'Flex', filtered: true },
          { marca: 'Chevrolet', combustivel: 'Alcool', filtered: true },
          { marca: 'Audi', combustivel: 'Gasolina', filtered: true },
          { marca: 'Kya', combustivel: 'Flex', filtered: true },
          { marca: 'Porshe', combustivel: 'Flex', filtered: true },
          { marca: 'Hyndai', combustivel: 'Flex', filtered: true },
          { marca: 'Ford', combustivel: 'Gasolina', filtered: true },
          { marca: 'Fiat', combustivel: 'Gasolina', filtered: true },
        ]
      }
    });

    it('deve marcar as páginas corretamente', () => {
      const result = paginateHelper(state);
      expectTheItemIsOnTheCorrectPage(result, perPage);
    });
  })

  describe('com filtro', () => {
    let state = {};
    let perPage = 2;
    beforeAll(() => {
      state = {
        perPage,
        data: [
          { marca: 'Volkswagen', combustivel: 'Gasolina', filtered: true },
          { marca: 'Chery', combustivel: 'Gasolina', filtered: true },
          { marca: 'Honda', combustivel: 'Flex', filtered: false },
          { marca: 'Toyota', combustivel: 'Gasolina', filtered: false },
          { marca: 'Toyota', combustivel: 'Flex', filtered: true },
          { marca: 'Volkswagen', combustivel: 'alcool', filtered: true },
          { marca: 'Chery', combustivel: 'Alcool', filtered: true },
          { marca: 'Chery', combustivel: 'Flex', filtered: false },
          { marca: 'Chevrolet', combustivel: 'Alcool', filtered: true },
          { marca: 'Audi', combustivel: 'Gasolina', filtered: true },
          { marca: 'Kya', combustivel: 'Flex', filtered: true },
          { marca: 'Porshe', combustivel: 'Flex', filtered: true },
          { marca: 'Hyndai', combustivel: 'Flex', filtered: true },
          { marca: 'Ford', combustivel: 'Gasolina', filtered: false },
          { marca: 'Fiat', combustivel: 'Gasolina', filtered: true },
        ]
      }
    });

    it('deve marcar total de página igual a 6', () => {
      const expected = 6;
      const result = paginateHelper(state);
      expect(result.totalPages).toEqual(expected);
    });

    it('deve marcar total de página igual a 4', () => {
      const expected = 4;
      const newState = Object.assign({}, state, { perPage: 3 });
      const result = paginateHelper(newState);
      expect(result.totalPages).toEqual(4);
    });
  });

  
});