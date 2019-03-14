import { getGreeting } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should mention Tabularius', () => {
    cy.contains('TABULARIUS');
  });
});
