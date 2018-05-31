$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("StandardBlocksTemplateEditor.feature");
formatter.feature({
  "line": 1,
  "name": "StandardBlocks Functionality validation for TemplateEditor",
  "description": "",
  "id": "standardblocks-functionality-validation-for-templateeditor",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2052860912,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate that user is able to drag and drop Standard Blocks on Template Editor",
  "description": "",
  "id": "standardblocks-functionality-validation-for-templateeditor;validate-that-user-is-able-to-drag-and-drop-standard-blocks-on-template-editor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is at Unific Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters valid Email and Password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is successfully Logged In",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Newcampaign",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Create new campaign from scratch",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is navigated to CampaignCreation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters Campaign title as \"Test Campaign Title\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User selects Starting Trigger as \"Order Confirmation Event\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects Action as \"Send Email\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters Subject Line as \"Order123\" and Pre header as \"{{order_id}}\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User edits Email",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clears Template",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User drags Standard blocks on the Template Canvas",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User is able to validate the blocks on Template Canvas",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 43628856877,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 2822199217,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 131558250,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_successfully_logged_in()"
});
formatter.result({
  "duration": 10343937781,
  "status": "passed"
});
formatter.match({
  "location": "CampaignCreation.user_clicks_on_Newcampaign()"
});
formatter.result({
  "duration": 10130065673,
  "status": "passed"
});
formatter.match({
  "location": "CampaignCreation.user_clicks_on_Create_new_campaign_from_scratch()"
});
formatter.result({
  "duration": 309435288,
  "status": "passed"
});
formatter.match({
  "location": "CampaignCreation.user_is_naviagated_to_CampaignCreation_Page()"
});
formatter.result({
  "duration": 85601510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Campaign Title",
      "offset": 31
    }
  ],
  "location": "CampaignCreation.user_enters_campaign_title_as_something(String)"
});
formatter.result({
  "duration": 437015107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order Confirmation Event",
      "offset": 34
    }
  ],
  "location": "CampaignCreation.user_selects_starting_trigger_as_something(String)"
});
formatter.result({
  "duration": 12113041785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send Email",
      "offset": 24
    }
  ],
  "location": "CampaignCreation.user_selects_action_as_something(String)"
});
formatter.result({
  "duration": 415379058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order123",
      "offset": 29
    },
    {
      "val": "{{order_id}}",
      "offset": 58
    }
  ],
  "location": "CampaignCreation.user_enters_subject_line_as_something_and_pre_header_as_something(String,String)"
});
formatter.result({
  "duration": 503048983,
  "status": "passed"
});
formatter.match({
  "location": "CampaignCreation.user_edits_email()"
});
formatter.result({
  "duration": 27658320190,
  "status": "passed"
});
formatter.match({
  "location": "TemplateEditor.user_clears_template()"
});
formatter.result({
  "duration": 105099908,
  "status": "passed"
});
formatter.match({
  "location": "TemplateEditor.user_drags_standard_blocks_on_the_template_canvas()"
});
formatter.result({
  "duration": 22298789716,
  "status": "passed"
});
formatter.match({
  "location": "TemplateEditor.user_is_able_to_validate_the_blocks_on_template_canvas()"
});
formatter.result({
  "duration": 51797,
  "status": "passed"
});
formatter.after({
  "duration": 94917574,
  "status": "passed"
});
});