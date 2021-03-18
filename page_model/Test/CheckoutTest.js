import LoginPage from '../Pages/LoginPage'
import UserPage from '../Pages/UserPage'
import LoggedPage from '../Pages/LoggedPage'
import CheckOutPage from '../Pages/CheckOutPage'
import FinalOrderPage from '../Pages/FinalOrderPage'
import { CREDENTIALS, USERINFO, PAGELABELS } from '../data/Constants'
fixture('Login Feature testing')
    .page `https://www.saucedemo.com/`

test('Cart items match with the checkout page', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.addItemToCart(6)
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.itemLabel.exists).ok()
    await CheckOutPage.ItemList(6)
    await LoggedPage.goToCheckoutPage()
    await CheckOutPage.fillUserInfo(USERINFO.FNAME, USERINFO.LNAME, USERINFO.ZIP)
    await CheckOutPage.continueCheckout()
    await CheckOutPage.ItemList(6)
})

test('User can purchase the items', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await LoggedPage.addItemToCart(4)
    await LoggedPage.goToShoppingCart()
    await LoggedPage.goToCheckoutPage()
    await CheckOutPage.fillUserInfo(USERINFO.FNAME, USERINFO.LNAME, USERINFO.ZIP)
    await CheckOutPage.continueCheckout()
    await t.expect(CheckOutPage.checkoutOverview.innerText).eql(PAGELABELS.CHECKOUTLABEL)
    await FinalOrderPage.finishOrder()
    await t.expect(FinalOrderPage.finishLabelMsg.innerText).eql(PAGELABELS.FINISHEDORDER)
})

