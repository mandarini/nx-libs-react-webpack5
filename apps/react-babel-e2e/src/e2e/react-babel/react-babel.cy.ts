describe('react-babel: ReactBabel component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactbabel--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactBabel!');
  });
});
