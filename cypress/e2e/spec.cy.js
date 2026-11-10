/// <reference types="Cypress" />
// yllä oleva rivi (mukaanlukien ///-merkit ) käynnistää IntteliSensen tälle kyseilselle tiedostolle, jonka avulla näemme funktioiden definitioinit

// describe – Mocha.js:n toiminto, joka kuvastaa testijoukkoa
describe('My First Test', () => {
  // it – mocha.js:n toiminto, joka kuvastaa yksittäistä testiä
  it('clicking "type" shows the right headings', () => {
    // cy. – viittaa Cypressin toimintoihin
    // visit – vieraillaan annetulla sivulla
    cy.visit('https://example.cypress.io');

    // wait – odotetaan annetun ajan (millisekunteina)
    cy.wait(5000);

    // contains – etsii annetun tekstin sisältävän elementin
    cy.contains('type').click();

    cy.wait(5000);

    // url – haetaan tämänhetkinen url
    // should – jokin tulisi olla jotain, määritellään argumenteilla
    // include – sisältää jonkin annetun arvon
    cy.url().should('include', '/commands/actions');

    // get –  haetaan DOM-elementti
    // type – kirjoitetaan DOM-elementtiin
    // have.value – tarkistetaan, että valitussa elementissä on annettu arvo
    // piste-operaattorilla voidaan ketjuttaa komentoja
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
