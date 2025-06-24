/// <reference types="cypress" />

describe('API /posts', () => {
  it('deve criar um novo post com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `https://jsonplaceholder.typicode.com/posts`,
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.headers).to.have.property('content-type');
      expect(response.body).to.have.all.keys('id');
      // Validação de schema simplificada
      expect(response.body).to.be.an('object');
    });
  });
});
