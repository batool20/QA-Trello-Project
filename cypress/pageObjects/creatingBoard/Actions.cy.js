class CreatingBoardActions {
    LoggedInToTrello() {
        cy.loginToTrello();
        return this;
    }
    NavigateToBoardsSection() {
        cy.findByDataTestId('home-team-tab-name').click();
        cy.findByDataTestId('home-team-boards-tab').click();
        return this;

    }
    ClickCreateButtonInNavBar() {
        cy.findByDataTestId('header-create-menu-button').click();
        return this;
    }
    SelectCreateBoardOption() {
        cy.findByDataTestId('header-create-board-button').click();
        return this;
    }
    EnterBoardName(boardName) {
        cy.findByDataTestId('create-board-title-input').type(boardName);
        return this;
    }
    ClickCreateButton() {
        cy.findByDataTestId('create-board-submit-button').click();
        return this;
    }

}
export default CreatingBoardActions;