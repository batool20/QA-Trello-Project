Feature: Move Template To Any List Functionality
    Scenario: Validate that user can move template to any list
        Given The user navigates to the existing card template
        When The user selects the option to move the template
        And The user chooses the target list from the available lists
        And The user clicks on the move button
        Then The template should be moved to the selected list successfully