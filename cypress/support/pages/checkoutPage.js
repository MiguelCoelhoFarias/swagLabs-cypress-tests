class CheckoutPage {

    elements = {
        buttonGoToCheckout: () => cy.get('.btn_action'),
        inputFirstName: () => cy.get('[data-test="firstName"]'),
        inputLastName: () => cy.get('[data-test="lastName"]'),
        inputZipCode: () => cy.get('[data-test="postalCode"]'),
        buttonContinueCheckout: () => cy.get('.btn_primary'),
        buttonCancelCheckout: () => cy.get('.cart_cancel_link'),
        messageError: () => cy.get('[data-test="error"]'),
        buttonFinish: () => cy.get('.btn_action'),
        headerCheckoutOverview: () => cy.get('.subheader'),
        headerProductPage: () => cy.get('.product_label'),
        finishedOrderMessage: () => cy.get('.pony_express')
    };

    confirmGoToCheckout() {
        this.elements.buttonGoToCheckout().click();
    }

    confirmCheckoutOverview() {
        this.elements.headerCheckoutOverview().should('be.visible');
    }

    confirmGoBackToProducts() {
        this.elements.headerProductPage().should('be.visible');
    }

    confirmFinishedOrder() {
        this.elements.finishedOrderMessage().should('be.visible');
    }

    fillFirstName(firstName) {
        this.elements.inputFirstName().type(firstName);
    }

    fillLastName(lastName) {
        this.elements.inputLastName().type(lastName);
    }

    fillZipCode(zipCode) {
        this.elements.inputZipCode().type(zipCode);
    }

    pressButtonContinue() {
        this.elements.buttonContinueCheckout().click();
    }

    pressButtonCancel() {
        this.elements.buttonCancelCheckout().click();
    }

    pressButtonFinish() {
        this.elements.buttonFinish().click();
    }

    confirmErrorFirstNameRequired() {
        this.elements.messageError().should("be.visible").contains('Error: First Name is required');
    }

    confirmErrorLastNameRequired() {
        this.elements.messageError().should("be.visible").contains('Error: Last Name is required');
    }

    confirmErrorByZipCodeRequired() {
        this.elements.messageError().should("be.visible").contains('Error: Postal Code is required');
    }




} export default new CheckoutPage();