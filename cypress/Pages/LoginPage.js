const login_button = '.ico-login'
const Email = '#Email'
const PassWord = '#Password'
const click_login = '.button-1.login-button'



class LoginPage {
    get_login_button () {return cy.get (login_button)}
    type_Email () {return cy.get(Email)}
    type_PassWord () {return cy.get(PassWord)}
    click_login () {return cy.get (click_login)}
}

export default LoginPage