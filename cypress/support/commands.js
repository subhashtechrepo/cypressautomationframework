/// <reference types="cypress" />
//require('cypress-xpath')
require('@cypress/xpath');
cy.faker = require('faker');

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("locator", (loc) => {
  if (locator.includes("//")) {
    return cy.xpath(loc);
  }
  else {
    return cy.get(loc);
  }
});