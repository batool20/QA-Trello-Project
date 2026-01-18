import { Given , When , Then, Before ,After } from "cypress-cucumber-preprocessor/steps";
import CreatingBoardActions from "../../../pageObjects/creatingBoard/Actions.cy.js";
import CreatingBoardAssertions from "../../../pageObjects/creatingBoard/Assetions.cy.js";

const creatingBoardActions = new CreatingBoardActions();
const creatingBoardAssertions = new CreatingBoardAssertions();
const boardName = "final-board2";
    
Given("the user is logged into Trello", () => {
  creatingBoardActions.LoggedInToTrello();
});

When("the user navigates to the boards section", () => {
  creatingBoardActions.NavigateToBoardsSection();
});

When("the user clicks on the Create button in navbar", () => {
  creatingBoardActions.ClickCreateButtonInNavBar();
});
When("the user selects Create board option", () => {
  creatingBoardActions.SelectCreateBoardOption();
});
When("the user enters a valid board name", () => {
  creatingBoardActions.EnterBoardName(boardName);
});
When("the user clicks on the Create button", () => {
  creatingBoardActions.ClickCreateButton();
});
Then("the new board should be created successfully", () => {
  creatingBoardAssertions.checkBoardIsCreation(boardName).checkBoardNameIsContain(boardName);
});

