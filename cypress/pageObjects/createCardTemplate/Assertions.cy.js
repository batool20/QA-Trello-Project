class createCardTemplateAssertion {
    checkTemplateConfirmationMessage(message){
        cy.findByDataTestId("template-card-back-banner").should("be.visible").and("contain.text",message)
        return this
}
}
export default createCardTemplateAssertion;