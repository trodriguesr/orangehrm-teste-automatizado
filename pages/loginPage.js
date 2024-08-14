class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: 'input[name=username]',
            passwordField: 'input[name=password]',
            loginButton: ".oxd-button",
            wrongCredentialAlert: ".oxd-alert",
            requireMessage: ".oxd-input-group__message",
            forgotPasswordLink: ".orangehrm-login-forgot"
          }
        return selectors  
    }

    accessLoginPage() {
        cy.visit("/auth/login")
    }

    loginWithValidUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }

    loginFail(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    loginUsernameBlank(password){
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().requireMessage).contains('Required')
    }

    loginPasswordBlank(username){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().requireMessage).contains('Required')
    }

    loginCredentialsBlank(){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().requireMessage).contains('Required')
    }

    loginForgotPassword(){
        cy.get(this.selectorsList().forgotPasswordLink).click()
        cy.location('pathname').should('equal', '/web/index.php/auth/requestPasswordResetCode')
    }
}

export default LoginPage