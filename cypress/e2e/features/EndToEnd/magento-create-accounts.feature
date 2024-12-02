Feature: Magento - home Page
Scenario: Verify the user will be able to access Magento web Portal and creates new customer data
Given Navigate To Magento Web Portal
When  Click on Create New Account Link and Enter the new Customer Data
Then  Check the Data on My Account Page

Scenario: Verify the user will be able to login into Magento web Portal
Given Navigate To Magento Web Portal
When  Enter Login credentinals
Then  Check the Data on My Account Page