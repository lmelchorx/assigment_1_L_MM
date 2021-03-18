import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector ('#password')
        this.loginButton = Selector ('#login-button')
        this.errorMessage = Selector ('.login-box > form:nth-child(1) > h3:nth-child(4)')
    }

    async submitLoginForm(username, password){

        await t.typeText(this.usernameField, username, {paste: true})
        await t.typeText(this.passwordField, password, {paste: true})
        await t.click(this.loginButton)
        
    }
}

export default new LoginPage()