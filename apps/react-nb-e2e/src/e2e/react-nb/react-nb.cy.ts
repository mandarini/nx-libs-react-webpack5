describe('react-nb: ReactNb component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactnb--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactNb!');
  });
});
