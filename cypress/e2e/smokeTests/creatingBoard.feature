Feature: Creating Board Functionality in Trello
@TC-1
Scenario: Validate that a user can create a new board successfully

    Given the user is logged into Trello
    When the user navigates to the boards section
    And the user clicks on the Create button in navbar
    And the user selects Create board option
    And the user enters a valid board name
    And the user clicks on the Create button
    Then the new board should be created successfully
    