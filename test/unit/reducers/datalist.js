import reducers from '../../../src/js/reducers';

describe('Create', () => {
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
        },
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

describe('Delete', () => {
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
      const result = reducers(state, {
        type: 'DELETE_ITEM',
        payload: {
          itensIds,
        }
      });
      const expected = state.data.length - 1;
      
      expect(result.data.length).toEqual(expected);
      expect(result.data[2].combustivel).toEqual('Flex');
    });

    it('diversos itens', () => {
      const itensIds = [3, 4, 7, 10, 15];
      const result = reducers(state, {
        type: 'DELETE_ITEM',
        payload: {
          itensIds,
        }
      });
      const expected = state.data.length - itensIds.length;
      expect(result.data.length).toEqual(expected);
    });
  });
});

describe('GET', () => {
  describe('adiciona no state', () => {
    it('todo a listagem de carros', () => {
      const state = {
        term: null,
        data: [],
      };
      const data = [
        { id: 1, marca: 'Chery', combustivel: 'Gasolina' },
        { id: 2, marca: 'Honda', combustivel: 'Flex' },
        { id: 3, marca: 'Toyota', combustivel: 'Gasolina' },
        { id: 4, marca: 'Toyota', combustivel: 'Flex' },
        { id: 5, marca: 'Volkswagen', combustivel: 'alcool' },
        { id: 6, marca: 'Chery', combustivel: 'Alcool' },
        { id: 7, marca: 'Chery', combustivel: 'Flex' },
      ];

      const result = reducers(state, {
        type: 'GET_ALL',
        payload: {
          data,
        },
      });

      expect(result.data).toEqual(data);
    });
  });
});
