import paginationReducer from '../../../src/js/reducers/pagination';

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
          { marca: 'Volkswagen', combustivel: 'Gasolina' },
          { marca: 'Chery', combustivel: 'Gasolina' },
          { marca: 'Honda', combustivel: 'Flex' },
          { marca: 'Toyota', combustivel: 'Gasolina' },
          { marca: 'Toyota', combustivel: 'Flex' },
          { marca: 'Volkswagen', combustivel: 'alcool' },
          { marca: 'Chery', combustivel: 'Alcool' },
          { marca: 'Chery', combustivel: 'Flex' },
          { marca: 'Chevrolet', combustivel: 'Alcool' },
          { marca: 'Audi', combustivel: 'Gasolina' },
          { marca: 'Kya', combustivel: 'Flex' },
          { marca: 'Porshe', combustivel: 'Flex' },
          { marca: 'Hyndai', combustivel: 'Flex' },
          { marca: 'Ford', combustivel: 'Gasolina' },
          { marca: 'Fiat', combustivel: 'Gasolina' },
        ]
      }
    });

    it('deve marcar as páginas corretamente', () => {
      const result = paginationReducer(state);
      expectTheItemIsOnTheCorrectPage(result, perPage);
    });
  })
});