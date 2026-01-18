class CreatingBoardAssertions { 
    checkBoardIsCreation(boardName) {
        cy.url().should("contain", boardName);
        return this;
    }
    checkBoardNameIsContain(boardName) {
       cy.findByDataTestId('board-name-input').should('have.value', boardName);
        return this;

    }
}

export default CreatingBoardAssertions;