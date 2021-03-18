import {Selector, t} from 'testcafe'

class loggedUserPage {
    constructor(){
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logOutButton = Selector('#logout_sidebar_link')
        this.cartButton = Selector('.svg-inline--fa')
        this.continueShopButton = Selector('.btn_secondary')
        this.addToCartButton = Selector('.btn_primary')
        this.itemLabel = Selector('.cart_item_label') 
        this.checkoutButton = Selector('.btn_action')
    }

    async logOutFromPage(){
        await t
        .click(this.menuButton)
        .click(this.logOutButton)
    }

    async goToShoppingCart(){
        await t
        .click(this.cartButton)
    }

    async returnToShopPage(){
        await t
        .click(this.continueShopButton)
    }
    //You need to specify the number of items that you want to add in the cart
    async addItemToCart(numberOfItems){
        for (let i= 0;i < numberOfItems; i++)
        await t
        .click(this.addToCartButton)
    }

    async goToCheckoutPage(){
        await t
        .click(this.checkoutButton)
    }

}

export default new loggedUserPage