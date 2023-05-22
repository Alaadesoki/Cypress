const Female = '#gender-female'
const FisrtName = '#FirstName'
const LastName = '#LastName'
const Email = '#Email'
const PassWord = '#Password'
const ConfirmPassWord = '#ConfirmPassword'
const Register = '#register-button'
const result  = '.message-error > ul > li'


class RegistrationPage {

    get_gender () {return cy.get(Female)}
    get_FirstName () {return cy.get(FisrtName)}
    get_LastName () {return cy.get(LastName)}
    get_Email () {return cy.get(Email)}
    get_PassWord () {return cy.get(PassWord)}
    get_ConfirmPassword () {return cy.get(ConfirmPassWord)}
    click_register () {return cy.get(Register)}
    firegistration_result () {return cy.get(result)}
}

export default RegistrationPage