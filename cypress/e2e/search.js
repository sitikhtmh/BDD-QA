const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open a website page', () => {
	cy.visit('http://zero.webappsecurity.com/')
})

When('I input the word "online" in the search field, then enter', () => {
    cy.get('#searchTerm').type('online {enter}')
    
})

Then('I should see the Search Results for the word "online"', () => {
    cy.get('h2').should('contain.text','Search Results:')
})
