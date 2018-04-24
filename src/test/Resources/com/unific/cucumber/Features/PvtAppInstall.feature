
Feature: Pvt Install for Unific

  Scenario: Pvt Installation on Shopify Dev Store [ PD-1506 ] [ PD-1529 ] [ PD-1536]
    Given User has successfully logged into Shopify Partners
    When User selects a Business
    And User selects to create a developement store
    And User enters Login Information
      | StoreName                | Password     | Confirm Password |
      | App_PvtInstall_Testing   | Testing@123! | Testing@123!     |
    And User enters Store Details
      | Address     | City     | Zip   | State   | Country       |
      | TestAddress | TestCity | 12345 | Alabama | United States |
    And User saves the store details
    Then DevStore is created with a Store URL
    When User navigates to unific sign up
    And User signups at unific
      | Username    | Domain Name     | Password |
      | unific__qa__ | @damcogroup.com | test     |
    And User submits the Store URL at unific and installs the Unlisted App
    And User verifies pre filled information
      | Street Address | City     | Zip   | State   | Country       |
      | TestAddress    | TestCity | 12345 | Alabama | United States |
    And User validates Big Price and enters Credit Card Details
      | Big Price | Card Number      | Postal Code | Expiration | CVC |
      | $49       | 4242424242424242 |  12345      | 02/39      | 123 |
    And User selects to Join
    Then User selects mandatory fields and also verifies pre filled information
      | Industry | Describe Yourself | StoreName                | Address     | City     | Zip   | State   | Country       |
      | Jewelry  | Developer         | App_PvtInstall_Testing   | TestAddress | TestCity | 12345 | Alabama | United States |
    And User skips connection to Facebook and Starts using Unific
    And Default Order Confirmation Campaign and Default Abandoned Cart Campaign should be preinstalled
