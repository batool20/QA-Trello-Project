Feature: Update Template Name Functionality
    Scenario: Validate that user can update name of template
    Given The user navigates to the existing card template
    When The user types a new template name in the card template name field
    Then The template name should be updated successfully
