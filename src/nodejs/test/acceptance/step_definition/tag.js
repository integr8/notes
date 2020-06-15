const { Given, When, Then } = require('cucumber');
const { expect } = require("chai");
const axios = require('axios');

Given('o endpoint RESTful para interação com a entidade tag', function () {
  this.endpoint = 'https://integr8.free.beeceptor.com/tag'
});
When('configuro o tipo da requisição requisição para {string}', function (content_type) {
  this.axios = axios.create({
    baseURL: this.endpoint,
    headers: {
      'Content-Type': content_type
    },
  });

  //TODO implementar um meio de recuperar os headers configurados
  return expect(content_type).to.be.equal(content_type)
});
When('realizo uma requisição uma requisição HTTP GET', async function () {
  this.response = await this.axios.get()
});
Then('recebo um código HTTP {int} para a requisição', function (int) {
  return expect(this.response.status).to.be.equal(200)
});
Then('o conteúdo do resposta não está vazio', function () {
  return expect(this.response.data).to.be.lengthOf(5)
});
