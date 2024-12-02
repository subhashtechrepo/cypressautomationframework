require('cypress-xpath')

class homePage {
    banerMsg(){
        return cy.xpath("//div[@class='message global demo']");
    }
    signLnk(){
        return cy.xpath("//div[@class='panel header']//ul//li[@class='authorization-link']//a");
    }
    createAccountLnk(){
        return cy.xpath("//div[@class='panel header']//ul//li[3]//a");
    }
    
}
export default homePage;