Feature: Create Card Template Functionality
Scenario: Validate that the user can create a new card template successfully
    Given The user opens an existing card on the board
    When The user clicks on the actions button on the card
    And The user selects the Make Template option from the dropdown
    Then A confirmation message "This is a Template card" should be displayed