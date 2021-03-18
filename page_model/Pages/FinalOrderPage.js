import {Selector, t} from 'testcafe'

class FinalOrderPage{
    constructor(){
        this.finishOrderButton = Selector('.btn_action')
        this.cancelOrder = Selector ('.cart_cancel_link')
        this.finishLabelMsg = Selector ('.complete-text')
        this.itemList = Selector ('.cart_list')
        this.overViewPage = Selector('.subheader')
    }

    async finishOrder(){
        await t
        .click(this.finishOrderButton)
    }
}

export default new FinalOrderPage 