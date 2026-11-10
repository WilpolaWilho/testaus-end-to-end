import { describe, it, cy } from 'local-cypress';

describe('pizza-online sivuston testaus', () => {
  it('sivuston kentät toimivat oikein', () => {
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');
  });
});
