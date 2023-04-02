import SearchPage from './searchh.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User open a website page', () => {
	SearchPage.visit()
})

When('User input the word "online" in the search field, then enter', () => {
    SearchPage.fillSearch()
})

Then('system displays the results successfully', () => {
    cy.get('h2').should('contain.text','Search Results:')
})
