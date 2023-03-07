Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given I open login page
        When Isubmit login
        Then I should see homepage