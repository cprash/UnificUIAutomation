@ignore
Feature: App Install for Unific


  Scenario: Admin Installation on Shopify Dev Store [ PD-1517 ] [PD-1529] [PD-1536] [PD-1537] [PD-1545]
    Given User has successfully logged into Shopify Partner
    When User selects Business
    And User selects to create a developement store
    And User enters Login Information
      | StoreName                | Password     | Confirm Password |
      | App_AdminInstall_Testing | Testing@123! | Testing@123!     |
    And User enters Store Details
      | Address     | City     | Zip   | State   | Country       |
      | TestAddress | TestCity | 12345 | Alabama | United States |
    And User saves the store details
    And User navigates to Apps in the concerned business
    And User is able to Create App Store Listing or install app from appstore
    And User installs the unlisted or listed App
    And User validates that the landing page is unific signup
    And User signups at unific
      | Username    | Domain Name     | Password         |
      | unific_     | @damcogroup.com | Testing@123!     |
    And User validates Big Price
      | Big Price |
      | $49       |
    And User selects Join
    And User selects to Approve charges
    #Then User selects mandatory fields and also verifies pre filled information
    #  | Industry | Describe Yourself | StoreName                | Address     | City     | Zip   | State   | Country       |
    #  | Jewelry  | Developer         | App_PvtInstall_Testing   | TestAddress | TestCity | 12345 | Alabama | United States |
    #And User skips connection to Facebook and Starts using Unific
    #And Default Order Confirmation Campaign and Default Abandoned Cart Campaign should be preinstalled

