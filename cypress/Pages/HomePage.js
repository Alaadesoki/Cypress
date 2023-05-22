const register_button = '.ico-register'
const login_button = '.ico-login'


class Homepage {
    get_register_button () {return cy.get(register_button)}
    get_login_button () {return cy.get (login_button)}
}

export default Homepage