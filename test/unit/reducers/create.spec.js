import createReducer from '../../../src/js/reducers/create';

describe('Create reducer', () => {
  describe('deve Adicionar 1 item', () => {
    let state = {};
    beforeAll(() => {
      state = {
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

    it('no início da lista', () => {
      const item = {
        marca: 'Chevrolet',
        combustivel: 'Flex',
      };

      const result = createReducer(item, state);
      
      expect(result.data[0].marca).toEqual('Chevrolet');
      expect(result.data[0].combustivel).toEqual('Flex');
    });
  });
});
