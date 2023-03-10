import SearchPage from './searchh.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open a website page', () => {
	SearchPage.visit()
})

When('I input the word "online" in the search field, then enter', () => {
    SearchPage.fillSearch()
})

Then('I should see the Search Results for the word "online"', () => {
    cy.get('h2').should('contain.text','Search Results:')
})
