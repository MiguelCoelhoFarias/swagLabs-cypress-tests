import  loginData  from '../fixtures/loginData.json'
import  loginPage  from '../support/pages/loginPage'
import  homePage from '../support/pages/homePage'

describe('Login User tests', () => {

  beforeEach(() => {
    cy.visit('/')
  });

    it('teste de login com usuário válido - standard_user', () => {
      loginPage.confirmPage();
      loginPage.fillUserName(loginData.loginStandardUser.userName);
      loginPage.fillPassword(loginData.loginStandardUser.password);
      loginPage.clickConfirmLogin();
      homePage.confirmHomePage();
    }) 

    it('teste de login com usuário bloqueado', () => {
      loginPage.confirmPage();
      loginPage.fillUserName(loginData.loginLockedOutUser.userName);
      loginPage.fillPassword(loginData.loginLockedOutUser.password);
      loginPage.clickConfirmLogin();
      loginPage.confirmMessageError();
    })

    it('teste de login com usuário com problemas', () => {
      loginPage.confirmPage();
      loginPage.fillUserName(loginData.loginProblemUser.userName);
      loginPage.fillPassword(loginData.loginProblemUser.password);
      loginPage.clickConfirmLogin();
      homePage.confirmHomePage();
      homePage.confirmProductImageNotLoaded();
    })

    it.only('teste de login com usuário com problema de performance', () => {
      loginPage.confirmPage();
      loginPage.fillUserName(loginData.loginPerformanceGlitchUser.userName);
      loginPage.fillPassword(loginData.loginPerformanceGlitchUser.password);
      loginPage.clickConfirmLogin();
      cy.window().then((win => {
        const timeToLoadHome = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
        expect(timeToLoadHome).to.be.greaterThan(2000);
      }))
      homePage.confirmHomePage();
    })

  })