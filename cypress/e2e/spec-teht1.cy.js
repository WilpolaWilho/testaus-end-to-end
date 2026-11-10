import { describe, it, cy } from 'local-cypress';

describe('Wikipedian testaus', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');

    cy.wait(3000);

    cy.get('#p-search > .cdx-button--fake-button').click();

    cy.get(
      '#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > [name="search"]',
    )
      .type('jamk')
      .should('have.value', 'jamk');

    cy.contains('ammattikorkeakoulu').click();

    cy.wait(3000);

    cy.url().should('include', '/Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');

    cy.get('#Kampukset').should('have.value', '#mwig');
  });
});
