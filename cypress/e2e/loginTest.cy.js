import  loginData  from '../fixtures/loginData.json'
import  loginPage  from '../support/pages/loginPage'

describe('Login User tests', () => {

    it.only('teste de login com usuário válido - standard_user', () => {
      cy.visit('/')
      loginPage.confirmPage();
      loginPage.fillUserName(loginData.loginStandardUser.userName);
      loginPage.fillPassword(loginData.loginStandardUser.password);
      loginPage.clickConfirmLogin();
    }) 

    it('teste de login com usuário bloqueado', () => {
      
    })




  })