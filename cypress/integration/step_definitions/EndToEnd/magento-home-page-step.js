import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {navigateToMagentoPortal,createNewLoginAccount,loginIntoMagento} from '../../../utils/EndToEnd/e2e-common-utils';
import {myAccountInformation} from '../../../modules/EndToEnd/my-account';
Given('Navigate To Magento Web Portal',() => {
	navigateToMagentoPortal();
});

When('Click on Create New Account Link and Enter the new Customer Data',() => {
	createNewLoginAccount();
});

Then('Check the Data on My Account Page',() => {
	myAccountInformation();
});

When('Enter Login credentinals',()=>{
    loginIntoMagento();
});