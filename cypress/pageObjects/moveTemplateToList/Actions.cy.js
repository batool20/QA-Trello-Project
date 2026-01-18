class moveTemplateToListActions {

    openCard(cardUrl){
        cy.visit(cardUrl)
        return this;
    }
    selectMoveTemplateOption(){
        cy.findByDataTestId("card-back-actions-button").click()
        cy.findByDataTestId("card-back-move-card-button").click()
        return this;
    }

    chooseTargetList(listName){
        cy.findByDataTestId("move-card-popover-select-list-destination-select--control").click()
        cy.contains("[role='option']",listName).click()
        return this;
    }

    clickMoveButton(){
        cy.findByDataTestId("move-card-popover-move-button").click();
        return this;
    }

}
export default moveTemplateToListActions;