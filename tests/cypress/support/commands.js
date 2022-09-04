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


// ********** Padrao Custom Command 
//Cypress.Commands.add('login', (user)=>{
//    if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
//    if (user.password) cy.get('input[name=password]').type(user.password)
//    
//    cy.contains('button', 'Entrar').click()
//})
Cypress.Commands.add('apiResetUser', (instagram) => {
    cy.request({
        url: 'http://localhost:3333/helpers-reset',
        method: 'DELETE',
        qs: { instagram: instagram }
    }).then(response => {
      expect(response.status).to.eql(204)
    })
})

Cypress.Commands.add('apiCreateUser', (payload) => {
    cy.apiResetUser(payload.instagram)
    
    cy.request({
        url: 'http://localhost:3333/signup',
        method: 'POST',
        body: payload
    }).then(response => {
      expect(response.status).to.eql(201)
    })
})