const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User open a website page', () => {
	cy.visit('http://zero.webappsecurity.com/')
})

When('User input the word "online" in the search field, then enter', () => {
    cy.get('#searchTerm').type('online {enter}')
    
})

Then('system displays the results successfully', () => {
    cy.get('h2').should('contain.text','Search Results:')
})
