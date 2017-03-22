Feature: Facebook

Baground:
Given: data

  Scenario Outline: To check user is able to login with valid credentials
    Given Launch "browser" and open facebook login page
    When Enter username and password from excel "<Row>"and press login
    Then user is logged in sussessfully

    Examples: 
      | Row |
      |   1 |
      |   2 |
