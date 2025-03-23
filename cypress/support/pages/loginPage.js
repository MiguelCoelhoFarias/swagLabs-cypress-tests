class LoginPage {

    elements = {
        loginLogo: () => cy.get('.login_logo'),
        inputUserName: () => cy.get('[data-test="username"]'),
        inputPassword: () => cy.get('[data-test="password"]'),
        buttonLogin: () => cy.get('#login-button'),
        errorLoginLockedOut: () => cy.get('[data-test="error"]')
    }

    confirmPage() {
        this.elements.loginLogo().should("be.visible")
    }

    confirmMessageError() {
        this.elements.errorLoginLockedOut().should("be.visible")
    }

    confirmErrorByPasswordRequired() {
        this.elements.errorLoginLockedOut().should("be.visible").contains('Epic sadface: Password is required')
    }

    confirmErrorByNameRequired() {
        this.elements.errorLoginLockedOut().should("be.visible").contains('Epic sadface: Username is required')
    }

    confirmErrorByUserInvalid() {
        this.elements.errorLoginLockedOut().should("be.visible").contains('Epic sadface: Username and password do not match any user in this service')
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