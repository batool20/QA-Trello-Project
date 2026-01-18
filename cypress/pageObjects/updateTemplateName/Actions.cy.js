class updateTemplateNameActions {

    openCard(cardUrl){
        cy.visit(cardUrl)
        return this
    }
    typeNewTemplateName(newName){
        cy.findByDataTestId("card-back-title-input").clear().type(newName).blur()
        return this
    }

}
export default updateTemplateNameActions;