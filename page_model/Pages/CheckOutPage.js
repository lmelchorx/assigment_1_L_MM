import {Selector, t} from 'testcafe'

class CheckoutPage {
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
        this.cancelButton = Selector('.cart_cancel_link')
        this.continueButton = Selector('.btn_primary')
        this.errorChMessage = Selector('.checkout_info_wrapper > form:nth-child(1) > h3:nth-child(1)')
        this.checkoutOverview = Selector('.subheader')
        this.itemList = Selector ('.cart_list')
    }

    async fillUserInfo(firstname, lastname, zipcode){
        await t
        .typeText(this.firstNameField, firstname, {paste:true})
        .typeText(this.lastNameField, lastname, {paste:true})
        .typeText(this.zipCodeField, zipcode, {paste:true})
    }

    async cancelCheckOut(){
        await t 
        .click(this.cancelButton)
    }

    async continueCheckout(){
        await t
        .click(this.continueButton)
    }

    async ItemList(numberOfItems){
        await t
        for (let i = 0; i < numberOfItems; i++) {
            const myCheckoutArray = []
            myCheckoutArray.push(await this.itemList.child('.cart_item').child('.cart_item_label').child('.cart_item_label > a').child('.inventory_item_name').nth(i).innerText);
            console.log (myCheckoutArray)
        }
    }
}

export default new CheckoutPage