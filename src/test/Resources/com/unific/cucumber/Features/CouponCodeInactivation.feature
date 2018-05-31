@ignore
Feature: Coupon Code Inactivation

  Scenario Outline: This Scenario checks the inactivity functionality of a Code Coupon

    Given User is at Unific Login Page
    When User Enters valid Email and Password
    And User Clicks on Login
    And User is able to navigate to Snippets Page
    And User selects to create a new Snippet
    And User enters Snippet Name as "<snippet>"
    And User selects Coupon Code Format with Prefix1 as "<prefix1>" Prefix2 as "<prefix2>" and Suffix as "<suffix>"
    And User selects Discount Type as "<discount type>" and Discount value as "<discount value>"
    And User selects applies to as "<applies to>"
    And User selects active dates as "<active date>"
    And User selects to save
    Then User is able to see the generated Coupon
    And User can inactivate the coupon

    Examples:
      | snippet | prefix1           | prefix2          | suffix | discount type | discount value | applies to       | active date  |
      | $100    | First name        |                  | 1@#    | Percentage    | 10             | Entire order     | Always active|