import LoginPage from '../Pages/LoginPage'
import UserPage from '../Pages/UserPage'
import LoggedPage from '../Pages/LoggedPage'
import { CREDENTIALS, PAGELABELS } from '../data/Constants'

fixture('Login Feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
} )

test('Users cannot login using valid credentials', async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql(PAGELABELS.LOGINERROR)
} )

test('Users can log out from products page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.logOutFromPage()
    await t.expect(LoginPage.loginButton.exists).ok()
} )