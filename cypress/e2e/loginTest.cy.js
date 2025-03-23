import  loginData  from '../fixtures/loginData.json'
import  loginPage  from '../support/pages/loginPage'
import  homePage from '../support/pages/productPage.js'
import { getUserValid } from '../support/faker.js'

describe('Testes de login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

    it('teste de login com usuário válido', () => {
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

    it('teste de login com usuário com problema de performance', () => {
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

    it.only('testar login com usuário invalido', () => {
      const usuario = getUserValid();
      loginPage.fillUserName(usuario.userName);
      loginPage.fillPassword(usuario.password);
      loginPage.clickConfirmLogin();
      loginPage.confirmErrorByUserInvalid();
    })

    it('testar login com campo Senha vazio', () => {
      loginPage.confirmPage();
      loginPage.fillUserName(loginData.loginStandardUser.userName);
      loginPage.clickConfirmLogin();
      loginPage.confirmErrorByPasswordRequired();
    })

    it('testar login com campo Nome de Usuario vazio', () => {
      loginPage.confirmPage();
      loginPage.fillPassword(loginData.loginStandardUser.password);
      loginPage.clickConfirmLogin();
      loginPage.confirmErrorByNameRequired();
    })


  })