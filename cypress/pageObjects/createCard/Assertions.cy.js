class createCardAssertions {
    checkCardTitleIsContain(cardName){
        cy.findByDataTestId("card-name").should('contain',cardName)
        return this
    }
}
export default createCardAssertions