class HomePage {

    elements = {
        homeLogo: () => cy.get('.app_logo'),
        productImage: () => cy.get('#item_4_img_link > .inventory_item_img'),
        buttonAddToCart: () => cy.get(':nth-child(1) > .pricebar > .btn_primary'),
        countProductInCart: () => cy.get('.fa-layers-counter'),
        buttonCart: () => cy.get('#shopping_cart_container > a > svg > path'),
        headerCartPage: () => cy.get('.subheader'),
        productNameOnCart: () => cy.get('.inventory_item_name'),
        productDescOnCart: () => cy.get('.inventory_item_desc'),
        productPriceOnCart: () => cy.get('.inventory_item_price'),
        productQntOnCart: () => cy.get('.cart_quantity'),
        buttonRemoveProduct: () => cy.get('.item_pricebar > .btn_secondary'),
    }
    
    confirmHomePage() {
        this.elements.homeLogo().should('be.visible');
    }
    confirmProductImage() {
        this.elements.productImage().should('be.visible');
    }

    confirmProductImageNotLoaded() {
        this.elements.productImage().should(($img) => {
            expect($img[0].naturalWidth).to.equal(0);
        })
    }

    confirmCartPage() {
        this.elements.headerCartPage().should('be.visible');
    }

    addAProductToCart() {
        this.elements.buttonAddToCart().click();
    }

    confirmProductInCart() {
        this.elements.countProductInCart().should('be.visible');
    }

    confirmIfCartIsEmpty() {
        this.elements.countProductInCart().should('not.exist');
    }

    clickOnCart() {
        this.elements.buttonCart().click();
    }

    confirmProductName() {
        this.elements.productNameOnCart().should('be.visible')
    }

    confirmProductDesc() {
        this.elements.productDescOnCart().should('be.visible')
    }

    confirmProductPrice() {
        this.elements.productPriceOnCart().should('be.visible')
    }
    
    confirmProductQuantity() {
        this.elements.productQntOnCart().should('be.visible')
    }

    removeProductOfCart() {
        this.elements.buttonRemoveProduct().click();
    }



} export default new HomePage();