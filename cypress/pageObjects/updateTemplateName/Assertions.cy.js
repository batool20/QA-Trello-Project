class updateTemplateNameAssertions {
    checkTemplateNameIsUpdated(newTemplateName){
        cy.findByDataTestId("card-back-title-input").should('have.text',newTemplateName)
    }   
}
export default updateTemplateNameAssertions;