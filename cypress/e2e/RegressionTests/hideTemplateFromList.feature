Feature: Hide Template Functionality
    Scenario: Validate that user can hide a template from the list
        Given The user navigates to the existing card template
        When The user selects the option to hide the template
        Then The template should be hidden from the list successfully