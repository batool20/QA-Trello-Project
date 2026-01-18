
class createCardActions {
    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this
    }

    clickOnAddACardButton(){
        cy.findByDataTestId("list-add-card-button").first().click()
        return this
    }

    typeCardNameInCardTitleInput(cardName){
        cy.findByDataTestId("list-card-composer-textarea").type(cardName)
        return this
    }

    clickOnAddCardButton(){
        cy.findByDataTestId("list-card-composer-add-card-button").click()
        return this
    }
}
export default createCardActions
