Feature: Search Data on the Website

    As a user
    I want to search the word 'online' in the website

     Scenario: Search data
        Given I open a website page
        When I input the word "online" in the search field, then enter
        Then I should see the Search Results for the word "online"