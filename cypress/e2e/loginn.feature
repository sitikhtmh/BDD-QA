Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given User open login page
        When User submit login
        Then User should see homepage