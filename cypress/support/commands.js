// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Cypress.Commands.add('loginToTrello', ()=>{})
// we need this cusstom command beacause the login process in trello
Cypress.Commands.add('loginToTrello', ()=>{
    cy.visit('/login')
    cy.wait(3000)
    cy.fixture('trelloUser').then((user)=>{
        cy.findByDataTestId('username').type(user.email)
        cy.findByDataTestId('login-submit-idf-testid').click()
        cy.wait(2000)
        cy.findByDataTestId('password').type(user.password)
        cy.findByDataTestId('login-submit-idf-testid').click()
        cy.wait(6000)
    })
})
// this selector data-testid is used in multiple places so we can use it as a custom command
Cypress.Commands.add('findByDataTestId', (dataTestId)=>{
    cy.get(`[data-testid="${dataTestId}"]`)
})
