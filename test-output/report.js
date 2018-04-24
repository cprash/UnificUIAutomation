$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminAppInstall.feature");
formatter.feature({
  "line": 1,
  "name": "App Install for Unific",
  "description": "",
  "id": "app-install-for-unific",
  "keyword": "Feature"
});
formatter.uri("CampaignCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Create a campaign and save it as a draft or publish it",
  "description": "",
  "id": "create-a-campaign-and-save-it-as-a-draft-or-publish-it",
  "keyword": "Feature"
});
formatter.uri("CreateDevStore.feature");
formatter.feature({
  "line": 1,
  "name": "Creating a new Dev Store",
  "description": "",
  "id": "creating-a-new-dev-store",
  "keyword": "Feature"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login  Feature",
  "description": "",
  "id": "login--feature",
  "keyword": "Feature"
});
formatter.uri("PvtAppInstall.feature");
formatter.feature({
  "line": 2,
  "name": "Pvt Install for Unific",
  "description": "",
  "id": "pvt-install-for-unific",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2626309908,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Pvt Installation on Shopify Dev Store [ PD-1506 ] [ PD-1529 ] [ PD-1506]",
  "description": "",
  "id": "pvt-install-for-unific;pvt-installation-on-shopify-dev-store-[-pd-1506-]-[-pd-1529-]-[-pd-1506]",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User has successfully logged into Shopify Partners",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects a Business",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects to create a developement store",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Login Information",
  "rows": [
    {
      "cells": [
        "StoreName",
        "Password",
        "Confirm Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "App_PvtInstall_Testing",
        "Testing@123!",
        "Testing@123!"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters Store Details",
  "rows": [
    {
      "cells": [
        "Address",
        "City",
        "Zip",
        "State",
        "Country"
      ],
      "line": 12
    },
    {
      "cells": [
        "TestAddress",
        "TestCity",
        "12345",
        "Alabama",
        "United States"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User saves the store details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "DevStore is created with a Store URL",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User navigates to unific sign up",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User signups at unific",
  "rows": [
    {
      "cells": [
        "Username",
        "Domain Name",
        "Password"
      ],
      "line": 18
    },
    {
      "cells": [
        "unific__qa__",
        "@damcogroup.com",
        "test"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User submits the Store URL at unific and installs the Unlisted App",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verifies pre filled information",
  "rows": [
    {
      "cells": [
        "Street Address",
        "City",
        "Zip",
        "State",
        "Country"
      ],
      "line": 22
    },
    {
      "cells": [
        "TestAddress",
        "TestCity",
        "12345",
        "Alabama",
        "United States"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User validates Big Price and enters Credit Card Details",
  "rows": [
    {
      "cells": [
        "Big Price",
        "Card Number",
        "Postal Code",
        "Expiration",
        "CVC"
      ],
      "line": 25
    },
    {
      "cells": [
        "$49",
        "4242424242424242",
        "12345",
        "02/39",
        "123"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects to Join",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects mandatory fields and also verifies pre filled information",
  "rows": [
    {
      "cells": [
        "Industry",
        "Describe Yourself",
        "StoreName",
        "Address",
        "City",
        "Zip",
        "State",
        "Country"
      ],
      "line": 29
    },
    {
      "cells": [
        "Jewelry",
        "Developer",
        "App_PvtInstall_Testing",
        "TestAddress",
        "TestCity",
        "12345",
        "Alabama",
        "United States"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User skips connection to Facebook and Starts using Unific",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Default Order Confirmation Campaign and Default Abandoned Cart Campaign should be preinstalled",
  "keyword": "And "
});
formatter.match({
  "location": "AppInstall.user_has_successfully_logged_into_shopify_partners()"
});
formatter.result({
  "duration": 23427118157,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_a_business()"
});
formatter.result({
  "duration": 3357714313,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_create_a_development_store()"
});
formatter.result({
  "duration": 1607870723,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_login_information(DataTable)"
});
formatter.result({
  "duration": 570289614,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_store_details(DataTable)"
});
formatter.result({
  "duration": 762964107,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_saves_the_store_details()"
});
formatter.result({
  "duration": 21938783793,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.devstore_is_created_with_a_store_url()"
});
formatter.result({
  "duration": 91032098,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_navigates_to_unific_sign_up()"
});
formatter.result({
  "duration": 109253590290,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_signups_at_unific(DataTable)"
});
formatter.result({
  "duration": 15222715648,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_submits_the_store_url_at_unific_and_installs_the_unlisted_app()"
});
formatter.result({
  "duration": 35497220712,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_verifies_pre_filled_information(DataTable)"
});
formatter.result({
  "duration": 10188352284,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_validates_big_price_and_enters_credit_card_details(DataTable)"
});
formatter.result({
  "duration": 905829543,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_join()"
});
formatter.result({
  "duration": 162189541,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_company_information_and_also_verifies_pre_filled_information(DataTable)"
});
formatter.result({
  "duration": 12145783281,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_skips_connection_to_facebook_and_starts_using_unific()"
});
formatter.result({
  "duration": 1511898662,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.default_order_confirmation_campaign_and_default_abandoned_cart_campaign_should_be_preinstalled()"
});
formatter.result({
  "duration": 5115065617,
  "status": "passed"
});
formatter.after({
  "duration": 865127048,
  "status": "passed"
});
});