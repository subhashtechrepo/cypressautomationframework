require('cypress-xpath')

class magentologinPage {
    userNametxt() {
      return cy.xpath("//input[@id='email']");
    }
    passwordtxt() {
      return cy.xpath("//input[@title='Password']");
    }
    signBtn() {
      return cy.xpath("//button[@class='action login primary']");
    }
    welcomeMsg() {
      return cy.xpath("//div[@class='panel header']//span[contains(text(),'Welcome')]");
    }
    welcomedropDown(){
      return cy.xpath("//div[@class='panel header']//span//button");
    }
    myAccountOption(){
      return cy.xpath("//div[@data-target='dropdown' and @aria-hidden='false']//ul//li[1]");
    }
}
export default magentologinPage;