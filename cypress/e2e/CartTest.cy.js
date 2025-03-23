import homePage from "../support/pages/productPage";

describe('Testes de fluxo de compra de produtos', () => {

beforeEach(() => {
    cy.visit('/');
    cy.loginWithValidUser();
})

it('Teste de adicionar produto ao carrinho com sucesso', () => {
    homePage.addAProductToCart();
    homePage.confirmProductInCart();
})

it('Teste de visualizar detalhes do produto no carrinho com sucesso', () => {
    homePage.addAProductToCart();
    homePage.clickOnCart();
    homePage.confirmCartPage();
    homePage.confirmProductName();
    homePage.confirmProductDesc();
    homePage.confirmProductPrice();
    homePage.confirmProductQuantity();
})

it('Teste de remover produto do carrinho com sucesso', () => {
    homePage.addAProductToCart();
    homePage.clickOnCart();
    homePage.confirmCartPage();
    homePage.removeProductOfCart();
    homePage.confirmIfCartIsEmpty();
})



})