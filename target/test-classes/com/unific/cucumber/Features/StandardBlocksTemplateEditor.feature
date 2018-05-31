Feature: StandardBlocks Functionality validation for TemplateEditor

  Scenario: Validate that user is able to drag and drop Standard Blocks on Template Editor

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
    And User edits Email
    And User clears Template
    And User drags Standard blocks on the Template Canvas
    Then User is able to validate the blocks on Template Canvas
