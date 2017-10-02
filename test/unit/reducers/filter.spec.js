import filterReducer from '../../../src/js/reducers/filter';

describe('Filter reducer', () => {
  describe('deve filtrar', () => {
    let state = {};
    let term = null;
    beforeAll(() => {
      state = {
        term,
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

    it('quando não tem termo', () => {
      const result = filterReducer(state);
      const expected = state.data.length;
      const totalFiltered = result.data.filter(({ filtered }) => filtered).length;
      
      expect(totalFiltered).toEqual(expected);
    });
  });
});
