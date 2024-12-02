require('cypress-xpath')

class myAccountPage {
    myAccountPageTitle(){
        return cy.xpath("//span[text()='My Account']");
    }
    accountPageInformationTitle(){
        return cy.xpath("//strong[text()='Account Information']");
    }
    contactInformation(){
        return cy.xpath("//div[@class='box box-information']//p");
    }
}
export default myAccountPage;