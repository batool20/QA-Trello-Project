class hideTemplateFromListAssertions {
    checkTemplateisHiddenFromList() {
        cy.findByDataTestId("card-back-archive-button").should("not.exist");
        cy.findByDataTestId("card-back-unarchive-card-button").should("be.visible");
        return this;
    }
}
export default hideTemplateFromListAssertions;