require('cypress-xpath')

class createAccountPage {
    firstNametxt() {
      return cy.xpath("//input[@id='firstname']");
    }
    lastNametxt() {
        return cy.xpath("//input[@id='lastname']");
    }
    emailAddresstxt() {
        return cy.xpath("//input[@id='email_address']");
    }
    passwordtxt() {
        return cy.xpath("//input[@id='password']");
    }
    confirmPasswordtxt() {
        return cy.xpath("//input[@id='password-confirmation']");
    }
    createAccountBtn() {
        return cy.xpath("//main[@id='maincontent']//button[@type='submit']");
    }
    createAccountPageTitle() {
        return cy.xpath("//span[text()='Create New Customer Account']");
    }
}
export default createAccountPage;