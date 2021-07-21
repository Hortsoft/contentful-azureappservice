context('App', () => {
    it('should load our app and show content', () => {
      cy.visit('/')
      cy.contains('What shall we say')
    })
  })