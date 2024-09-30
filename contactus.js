import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Steps to visit the contact us page
Given('I visit the contact us page',()=>{

    cy.visit('https://automationexercise.com/contact_us');
})

// steps to fill in the contact us form
When('I fill in the contact us form with the valid details',()=>{

    cy.get('[name="name"]').type('Lakshmi yasaswini');
    cy.get('[name="email"]').type('yashuraja1708@gmail.com');
    cy.get('[name="subject"]').type('knowing about how the product will have');
    cy.get('[name="message"]').type('It is a good platform');
})

// step to click on the submit form
And('I submit the form',()=>{

    cy.get('[name="submit"]').click();
})

// steps to verify the conformation message
Then('I should see the conformation message',()=>{

    cy.on('window:alert',(alertinfo)=>{
        expect(alertinfo).to.contains("Message has been sent successfully");
    })
})
