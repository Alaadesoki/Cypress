import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Homepage from '../../Pages/HomePage'
import RegistrationPage from '../../Pages/RegistrationPage'
import LoginPage from '../../Pages/LoginPage'
import { use } from 'chai'

const homepage = new Homepage() 
const registrationpage = new RegistrationPage()
const loginpage = new LoginPage

beforeEach(() => {
    cy.fixture('RegisterData').as('user')

})

Given ('go to home Page' , ()=> {
    cy.visit('/')
})

When ('click on login button' , ()=>{
    loginpage.get_login_button ().click ();
})

And ('fill the login data' , () =>{
    cy.get('@user').then(user => {

    loginpage.type_Email().type(user.Email)
    loginpage.type_PassWord().type(user.PassWord)
    loginpage.click_login ().click()
})

Then ('login success' , () =>{
    expect (cy.get('.topic-block-title > h2').should('have.text'))
 
})

})
