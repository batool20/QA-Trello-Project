class deleteCardActions {

    openCard(cardUrl){
        cy.visit(cardUrl)
    }
    clickOnArchiveCardButton(){
        cy.findByDataTestId("card-back-actions-button").click()
        cy.findByDataTestId("card-back-archive-button").click()
    }
    clickOnDeleteCardButtonAndConfirmDelete(){
        cy.findByDataTestId("card-back-delete-card-button").click()
        cy.findByDataTestId("popover-confirm-button").click()
    }
}
export default deleteCardActions;