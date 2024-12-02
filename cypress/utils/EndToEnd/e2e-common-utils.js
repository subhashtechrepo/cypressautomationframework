import createAccountPage from '../../pages/createaccount-po.js';
import homePage from '../../pages/homepage-po.js';
import magentologinPage from '../../pages/login-po.js';
import {email,password} from '../../variables/login-const.js';


const magentoHomePage = new homePage();
const newCustomerAccountPage = new createAccountPage();
const loginPage = new magentologinPage();


export function navigateToMagentoPortal(){
	var magentoUrl = Cypress.env(Cypress.env('environment')).web_url;
    cy.visit(magentoUrl);
    magentoHomePage.banerMsg().should('contains.text','This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.');
    magentoHomePage.signLnk().should('contains.text', 'Sign In');
    magentoHomePage.createAccountLnk().should('have.text', 'Create an Account');
}

export function createNewLoginAccount(){
    magentoHomePage.createAccountLnk().should('be.visible');
    magentoHomePage.createAccountLnk().click();
    newCustomerAccountPage.createAccountPageTitle().should('be.visible');
    newCustomerAccountPage.firstNametxt().type('QA Automation');
    newCustomerAccountPage.lastNametxt().type('Test');
    newCustomerAccountPage.emailAddresstxt().type(email);
    newCustomerAccountPage.passwordtxt().type(password);
    newCustomerAccountPage.confirmPasswordtxt().type(password);
    newCustomerAccountPage.createAccountBtn().click();
}

export function loginIntoMagento(){
    magentoHomePage.signLnk().should('be.visible');
    magentoHomePage.signLnk().click();
    loginPage.userNametxt().type(email);
    loginPage.passwordtxt().type(password);
    loginPage.signBtn().click();
    loginPage.welcomeMsg().should('contains.text','Welcome');
    loginPage.welcomedropDown().click();
    loginPage.myAccountOption().click();
}