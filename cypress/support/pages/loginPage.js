//construcao de classe como arq padrao, contendo mapeamento de elementos e alem disso acoes com esses elementos.
class LoginPage {

    elements = {
        loginLogo: () => cy.get('.login_logo'),
        inputUserName: () => cy.get('[data-test="username"]'),
        inputPassword: () => cy.get('[data-test="password"]'),
        buttonLogin: () => cy.get('#login-button')
    }

    confirmPage() {
        this.elements.loginLogo().should("be.visible")
    }

    fillUserName(userName) {
        this.elements.inputUserName().type(userName)
    }

    fillPassword(password) {
        this.elements.inputPassword().type(password)
    }

    clickConfirmLogin() {
        this.elements.buttonLogin().click();
    }

} export default new LoginPage();