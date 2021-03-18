import LoginPage from '../Pages/LoginPage'
import UserPage from '../Pages/UserPage'
import LoggedPage from '../Pages/LoggedPage'
import CheckOutPage from '../Pages/CheckOutPage'
import { CREDENTIALS, USERINFO } from '../data/Constants'

fixture('Login Feature testing')
    .page `https://www.saucedemo.com/`

test('Users can go to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.continueShopButton.exists).ok()
} )

test('Users can add an item to the shopping cart', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.addItemToCart(1)
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.itemLabel.exists).ok()
})

test('Users can add all the items to the shopping cart', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.addItemToCart(6)
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.itemLabel.exists).ok()
    await CheckOutPage.ItemList(6)
    await LoggedPage.returnToShopPage()
})

test('users cant continue without fill their info', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.addItemToCart(1)
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.itemLabel.exists).ok()
    await LoggedPage.goToCheckoutPage()
    await CheckOutPage.continueCheckout()
    await t.expect(CheckOutPage.errorChMessage.exists).ok()
    await t.expect(CheckOutPage.errorChMessage.innerText).eql('Error: First Name is required')
})

test('users can fill their info and continue with checkout', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.addItemToCart(3)
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.itemLabel.exists).ok()
    await LoggedPage.goToCheckoutPage()
    await CheckOutPage.fillUserInfo(USERINFO.FNAME, USERINFO.LNAME, USERINFO.ZIP)
    await CheckOutPage.continueCheckout()
    await t.expect(CheckOutPage.checkoutOverview.innerText).eql('Checkout: Overview')
})

