class hideTemplateFromListActions {
    openCard(cardUrl) {
        cy.visit(cardUrl);
        return this;
    }
    selectHideTemplateOption() {
        cy.findByDataTestId("card-back-actions-button").click()
        cy.findByDataTestId("card-back-archive-button").click()
        return this;
    }
}
export default hideTemplateFromListActions;