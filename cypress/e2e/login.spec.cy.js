import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {

  it('Login success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithValidUser('Admin', 'admin123')
    
  })

  it('Login fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginFail('Admin@', 'admin123@')
    
  })

  it('Login username blank', () => {
    loginPage.accessLoginPage()
    loginPage.loginUsernameBlank('admin123')
  })

  it('Login password blank', () => {
    loginPage.accessLoginPage()
    loginPage.loginPasswordBlank('Admin')
  })

  it('Login credentials blank', () => {
    loginPage.accessLoginPage()
    loginPage.loginCredentialsBlank()
  })

  it('Forgot password', () => {
    loginPage.accessLoginPage()
    loginPage.loginForgotPassword()
  })

})