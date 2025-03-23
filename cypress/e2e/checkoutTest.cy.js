import { getUserInformationForBuy } from "../support/faker.js"
import checkoutPage from "../support/pages/checkoutPage";


describe('Testes de fluxo de finalizar compra', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.loginFlowAndAddProductToCart();
    })

    it('Teste de prosseguir compra com sucesso', () => {
        const dataCheckout = getUserInformationForBuy();
        checkoutPage.confirmGoToCheckout();
        checkoutPage.fillFirstName(dataCheckout.firstName);
        checkoutPage.fillLastName(dataCheckout.lastName);
        checkoutPage.fillZipCode(dataCheckout.zipCode);
        checkoutPage.pressButtonContinue();
        checkoutPage.confirmCheckoutOverview();
    })

    it('Teste de finalizar compra com sucesso', () => {
        const dataCheckout = getUserInformationForBuy();
        checkoutPage.confirmGoToCheckout();
        checkoutPage.fillFirstName(dataCheckout.firstName);
        checkoutPage.fillLastName(dataCheckout.lastName);
        checkoutPage.fillZipCode(dataCheckout.zipCode);
        checkoutPage.pressButtonContinue();
        checkoutPage.confirmCheckoutOverview();
        checkoutPage.pressButtonFinish();
        checkoutPage.confirmFinishedOrder();

    })

    it('Teste de cancelar fluxo de compra com sucesso', () => {
        const dataCheckout = getUserInformationForBuy();
        checkoutPage.confirmGoToCheckout();
        checkoutPage.fillFirstName(dataCheckout.firstName);
        checkoutPage.fillLastName(dataCheckout.lastName);
        checkoutPage.fillZipCode(dataCheckout.zipCode);
        checkoutPage.pressButtonContinue();
        checkoutPage.confirmCheckoutOverview();
        checkoutPage.pressButtonCancel();
        checkoutPage.confirmGoBackToProducts();
    })


    it('Teste de falhar ao nao preencher nome para checkout', () => {
        const dataCheckout = getUserInformationForBuy();
        checkoutPage.confirmGoToCheckout();
        checkoutPage.fillLastName(dataCheckout.lastName);
        checkoutPage.fillZipCode(dataCheckout.zipCode);
        checkoutPage.pressButtonContinue();
        checkoutPage.confirmErrorFirstNameRequired();
    })

    it('Teste de falhar ao nao preencher ultimo nome para checkout', () => {
        const dataCheckout = getUserInformationForBuy();
        checkoutPage.confirmGoToCheckout();
        checkoutPage.fillFirstName(dataCheckout.firstName);
        checkoutPage.fillZipCode(dataCheckout.zipCode);
        checkoutPage.pressButtonContinue();
        checkoutPage.confirmErrorLastNameRequired();
    })

    it.only('Teste de falhar ao nao preencher codigo postal para checkout', () => {
        const dataCheckout = getUserInformationForBuy();
        checkoutPage.confirmGoToCheckout();
        checkoutPage.fillFirstName(dataCheckout.firstName);
        checkoutPage.fillLastName(dataCheckout.lastName);
        checkoutPage.pressButtonContinue();
        checkoutPage.confirmErrorByZipCodeRequired();
    })


})