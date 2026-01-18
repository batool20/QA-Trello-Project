Feature: Delete Card Functionality
    Scenario: Validate that user can delete existing card successfully
    Given The user opens an existing card on the board
    When The user clicks on archive card button
    And The user clicks on delete card button and confirm delete
    Then The card should be deleted successfully

