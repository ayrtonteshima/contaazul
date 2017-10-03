import deleteReducer from '../../../src/js/reducers/delete';

describe('Delete reducer', () => {
  describe('deve remover', () => {
    let state = {};
    beforeAll(() => {
      state = {
        term: 'Honda',
        data: [
          { id: 1, marca: 'Chery', combustivel: 'Gasolina' },
          { id: 2, marca: 'Honda', combustivel: 'Flex' },
          { id: 3, marca: 'Toyota', combustivel: 'Gasolina' },
          { id: 4, marca: 'Toyota', combustivel: 'Flex' },
          { id: 5, marca: 'Volkswagen', combustivel: 'alcool' },
          { id: 6, marca: 'Chery', combustivel: 'Alcool' },
          { id: 7, marca: 'Chery', combustivel: 'Flex' },
          { id: 8, marca: 'Chevrolet', combustivel: 'Alcool' },
          { id: 9, marca: 'Audi', combustivel: 'Gasolina' },
          { id: 10, marca: 'Kya', combustivel: 'Flex' },
          { id: 11, marca: 'Porshe', combustivel: 'Flex' },
          { id: 12, marca: 'Hyndai', combustivel: 'Flex' },
          { id: 13, marca: 'Ford', combustivel: 'Gasolina' },
          { id: 14, marca: 'Fiat', combustivel: 'Gasolina' },
          { id: 15, marca: 'Volkswagen', combustivel: 'Gasolina' },
        ]
      };
    });

    it('1 item', () => {
      const itensIds = [3];
      const result = deleteReducer(itensIds, state);
      const expected = state.data.length - 1;
      
      expect(result.data.length).toEqual(expected);
      expect(result.data[2].combustivel).toEqual('Flex');
    });

    it('diversos itens', () => {
      const itensIds = [3, 4, 7, 10, 15];
      const result = deleteReducer(itensIds, state);
      const expected = state.data.length - itensIds.length;
      expect(result.data.length).toEqual(expected);
    });
  });
});
