describe('react-swc: ReactSwc component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactswc--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactSwc!');
  });
});
