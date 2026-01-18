class createCardTemplateActions {

    openCard(cardUrl){
        cy.visit(cardUrl)
        return this
    }

    clickOnActionsButton(){
        cy.findByDataTestId('card-back-actions-button').click()
        return this
    }

    selectMakeTemplateOption(){
        cy.findByDataTestId('card-back-make-template-button').click()
        return this
    }
}
export default createCardTemplateActions;