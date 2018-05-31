@ignore
Feature: Creating a new Dev Store

  Scenario: Create Development Store
    Given User has successfully logged into Shopify Partners
    When User selects a Business
    And User selects to create a developement store
    And User enters Login Information
      | StoreName                | Password     | Confirm Password |
      | App_Install_Testing      | Testing@123! | Testing@123!     |
    And User enters Store Details
      | Address     | City     | Zip   | State   | Country       |
      | TestAddress | TestCity | 12345 | Alabama | United States |
    And User saves the store details
    Then DevStore is created with a Store URL