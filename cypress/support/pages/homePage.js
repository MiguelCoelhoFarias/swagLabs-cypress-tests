class HomePage {

    elements = {
        homeLogo: () => cy.get('.app_logo'),
        productImage: () => cy.get('#item_4_img_link > .inventory_item_img')
    }
    
    confirmHomePage() {
        this.elements.homeLogo().should('be.visible')
    }
    confirmProductImage() {
        this.elements.productImage().should('be.visible')
    }

    confirmProductImageNotLoaded() {
        this.elements.productImage().should(($img) => {
            expect($img[0].naturalWidth).to.equal(0);
        })
    }

} export default new HomePage();