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

import loginPage from "./pages/loginPage"
import loginData from "../fixtures/loginData.json"
import homePage from "./pages/productPage"

Cypress.Commands.add('loginWithValidUser',() => {
    loginPage.fillUserName(loginData.loginStandardUser.userName);
    loginPage.fillPassword(loginData.loginStandardUser.password);
    loginPage.clickConfirmLogin();
})

Cypress.Commands.add('loginFlowAndAddProductToCart', () => {
    loginPage.fillUserName(loginData.loginStandardUser.userName);
    loginPage.fillPassword(loginData.loginStandardUser.password);
    loginPage.clickConfirmLogin();
    homePage.addAProductToCart();
    homePage.clickOnCart();
})
