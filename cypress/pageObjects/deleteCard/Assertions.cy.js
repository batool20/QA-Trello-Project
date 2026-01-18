

class deleteCardAssertions {
    checkCardIsDeleted(cardName){
        cy.contains(cardName).should('not.exist')
    }
}
export default deleteCardAssertions;