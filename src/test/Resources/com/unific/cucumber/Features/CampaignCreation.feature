Feature: Create a campaign and save it as a draft or publish it
  @ignore
  Scenario: Create Campaign and publish it
    Given User is at Unific Login Page
    When User Enters valid Email and Password
    And User Clicks on Login
    Then User is successfully Logged In
    When User clicks on Newcampaign
    And User clicks on Create new campaign from scratch
    Then User is navigated to CampaignCreation Page
    When User enters Campaign title as "Test Campaign Title"
    And User selects Starting Trigger as "Order Confirmation Event"
    And User selects Action as "Send Email"
    And User enters Subject Line as "Order123" and Pre header as "{{order_id}}"
    And User enters an End Goal as "Order Created"
    And User clicks on Publish
    Then User is able to see the Campaign in the Dashboard as Published




