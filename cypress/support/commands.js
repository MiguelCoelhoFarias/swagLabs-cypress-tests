
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
