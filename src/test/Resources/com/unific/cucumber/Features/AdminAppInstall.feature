Feature: App Install for Unific
  @ignore
  Scenario: Admin Installation on Shopify Dev Store [ PD-1517 ] [PD-1529]
    Given User has successfully logged into Shopify Partners
    When User selects a Business
    And User selects to create a developement store
    And User enters Login Information
      | StoreName                | Password     | Confirm Password |
      | App_AdminInstall_Testing | Testing@123! | Testing@123!     |
    And User enters Store Details
      | Address     | City     | Zip   | State   | Country       |
      | TestAddress | TestCity | 12345 | Alabama | United States |
    And User saves the store details
    And User navigates to Apps in the concerned business
    And User is able to Create App Store Listing
    And User installs the unlisted App
    And User signups at unific
      | Username    | Domain Name     | Password |
      | unific__qa_ | @damcogroup.com | test     |
    Then User selects mandatory fields and also verifies pre filled information
      | Industry | Describe Yourself | StoreName                | Address     | City     | Zip   | State   | Country       |
      | Jewelry  | Developer         | App_AdminInstall_Testing | TestAddress | TestCity | 12345 | Alabama | United States |
    And User skips the connection to Facebook and Starts using Unific
