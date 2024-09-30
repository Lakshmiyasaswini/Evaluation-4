Feature: Contact Us functionality
Scenario: User submits the contact us form successfully
Given I visit the contact us page
When I fill in the contact us form with the valid details
And I submit the form
Then I should see the conformation message
