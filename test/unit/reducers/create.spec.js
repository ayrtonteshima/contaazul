import reducers from '../../../src/js/reducers';

describe('Create reducer', () => {
  describe('deve Adicionar 1 item', () => {
    let state = {};
    let item = {};
    let result = {};
    beforeAll(() => {
      state = {
        term: 'Honda',
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
      };

      item = {
        marca: 'Chevrolet',
        combustivel: 'Flex',
      };

      result = reducers(state, {
        type: 'CREATE_ITEM',
        payload: {
          item,
        }
      });
    });

    it('no início da lista', () => {
      expect(result.data[0].marca).toEqual('Chevrolet');
      expect(result.data[0].combustivel).toEqual('Flex');
    });

    it('O termo deve ser limpo', () => {
      expect(result.term).toBeNull();
    });
  });
});
