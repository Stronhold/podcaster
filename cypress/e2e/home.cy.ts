describe('Home page', () => {
  it('should visit home page', () => {
    cy.visit('/');
    cy.get('[data-testid="podcast-list"]').should('exist');
  });
  it('should be able to got to podcast page', async () => {
    cy.visit('/');
    const listComponent = await cy.get('[data-testid="podcast-list"]');
    const child = listComponent[0].children[0];
    child.click();
    cy.location().should((location) => {
      expect(location.pathname).to.contain('/podcast/');
    });
  });
});
