const frisby = require('frisby');
const Joi = frisby.Joi;

const { URL_BASE } = require('./../../src/configs/urls');

describe('Endpoint da api fleets', () => {
  describe('método GET', () => {
    it ('deve retornar 200', function (done) {
      frisby
        .get(`${URL_BASE}/api/v1/fleets`)
        .expect('status', 200)
        .done(done);
    });

    it ('deve retornar o contrato correto', function (done) {
      frisby
        .get(`${URL_BASE}/api/v1/fleets`)
        .expect('jsonTypes', 'data.*', {
          combustivel: Joi.string().required(),
          imagem : Joi.optional(),
          marca : Joi.string().required(),
          modelo : Joi.string().required(),
          placa : Joi.string().required(),
          valor : Joi.string().required()
        })
        .done(done);
    });
  })

  describe('método POST', () => {
    it ('deve retornar 200', function (done) {
      frisby
        .post(`${URL_BASE}/api/v1/fleets`, {
          combustivel: 'Gasolina',
          imagem: null,
          marca: 'Chery',
          modelo: 'New QQ',
          placa: 'AJT-1234',
          valor: '30000'
        })
        .expect('status', 200)
        .done(done);
    });
  });
});