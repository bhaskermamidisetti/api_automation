@qaquatation
Feature: QA Quotation Engine - Create a new member and create a new quote, verify verify the member.

  As a  admin
  I want to utilise endpoint of the QA Quotation Engine API's
  So I can create new member&  create quote to the member and verify the member

 @sanity
  Scenario: Verify as a admin i can Create and verify the member
    Given Create a new member using the POST request
    When Create a new quote for the member using POST request
    And Verify the the existing member