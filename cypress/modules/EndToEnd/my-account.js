import myAccountPage from '../../pages/my-account-po';

const myAccountInfoPage = new myAccountPage();

export function myAccountInformation(){
    myAccountInfoPage.myAccountPageTitle().should('have.text','My Account');
    myAccountInfoPage.accountPageInformationTitle().should('have.text', 'Account Information');
    myAccountInfoPage.contactInformation().should('contains.text', 'QA Automation Test');
}