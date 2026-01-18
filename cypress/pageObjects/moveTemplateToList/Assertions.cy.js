class moveTemplateToListAssertions {    
    checkTemplateisMovedToList(listName) {
            cy.get("header").find("span").contains(listName).should("be.visible");
        return this;
    }   
}
export default moveTemplateToListAssertions;