describe('pizza-online sivuston testaus', () => {
  it('sivuston kentät toimivat oikein', () => {
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');

    cy.get('#nimi')
      .should('be.visible')
      .click()
      .type('Matti Meikäläinen')
      .should('have.value', 'Matti Meikäläinen');

    cy.get('#puhelin')
      .should('be.visible')
      .click()
      .type('0401234567')
      .should('have.value', '0401234567');

    cy.get('#sposti')
      .should('be.visible')
      .click()
      .type('matti.meikalainen@example.com')
      .should('have.value', 'matti.meikalainen@example.com');

    cy.get('#koko').should('be.visible').select('Suuri');

    cy.get('[for="Normaali"]').should('be.visible').click();

    cy.get('[for="Kinkku"]').should('be.visible').click();
    cy.get('[for="Salami"]').should('be.visible').click();

    cy.get('.lomake > :nth-child(8)')
      .should('be.visible')
      .should('have.text', 'Hinta: 12.50 e');
  });
});
