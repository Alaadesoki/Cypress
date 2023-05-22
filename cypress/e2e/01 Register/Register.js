import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Homepage from '../../Pages/HomePage'
import RegistrationPage from '../../Pages/RegistrationPage'

const homepage = new Homepage() 
const registrationpage = new RegistrationPage()

beforeEach(() => {
    cy.fixture('RegisterData').as('user')

})
Given('get to home Page', () => {
    cy.visit('/')
})

When('click on registeration button' , ()=> {
        homepage.get_register_button().click();
    })

And('fill the rigestration data', () => {
        cy.get('@user').then(user => {
        registrationpage.get_gender().click()
        registrationpage.get_FirstName().type(user.FirstName)
        registrationpage.get_LastName().type(user.lastName)
        registrationpage.get_Email().type(user.Email)
        registrationpage.get_PassWord().type(user.PassWord)
        registrationpage.get_ConfirmPassword().type(user.ConfirmPassword)
        registrationpage.click_register().click()

        })

    Then('account created', ()=> {
        expect (cy.get('.message-error > ul > li').should('have.text'))
    })

    })