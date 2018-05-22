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
formatter.uri("CodeCouponCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Coupon Creation",
  "description": "",
  "id": "coupon-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"\u003csnippet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"\u003cprefix1\u003e\" Prefix2 as \"\u003cprefix2\u003e\" and Suffix as \"\u003csuffix\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"\u003cdiscount type\u003e\" and Discount value as \"\u003cdiscount value\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"\u003capplies to\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"\u003cactive date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;",
  "rows": [
    {
      "cells": [
        "snippet",
        "prefix1",
        "prefix2",
        "suffix",
        "discount type",
        "discount value",
        "applies to",
        "active date"
      ],
      "line": 19,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;1"
    },
    {
      "comments": [
        {
          "line": 20,
          "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
        },
        {
          "line": 21,
          "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
        },
        {
          "line": 22,
          "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
        },
        {
          "line": 23,
          "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
        },
        {
          "line": 24,
          "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
        },
        {
          "line": 25,
          "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
        },
        {
          "line": 26,
          "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
        },
        {
          "line": 27,
          "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
        },
        {
          "line": 28,
          "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
        },
        {
          "line": 29,
          "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
        },
        {
          "line": 30,
          "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
        },
        {
          "line": 31,
          "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
        },
        {
          "line": 32,
          "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
        },
        {
          "line": 33,
          "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
        },
        {
          "line": 34,
          "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
        },
        {
          "line": 35,
          "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
        },
        {
          "line": 36,
          "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
        },
        {
          "line": 37,
          "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
        },
        {
          "line": 38,
          "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Always active|"
        },
        {
          "line": 39,
          "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Always active|"
        },
        {
          "line": 40,
          "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Always active|"
        },
        {
          "line": 41,
          "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Always active|"
        },
        {
          "line": 42,
          "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Always active|"
        },
        {
          "line": 43,
          "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Always active|"
        },
        {
          "line": 44,
          "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
        },
        {
          "line": 45,
          "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
        },
        {
          "line": 46,
          "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
        },
        {
          "line": 47,
          "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
        },
        {
          "line": 48,
          "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
        },
        {
          "line": 49,
          "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
        },
        {
          "line": 50,
          "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
        },
        {
          "line": 51,
          "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
        },
        {
          "line": 52,
          "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
        },
        {
          "line": 53,
          "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
        },
        {
          "line": 54,
          "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
        },
        {
          "line": 55,
          "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
        },
        {
          "line": 56,
          "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 57,
          "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 58,
          "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 59,
          "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 60,
          "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 61,
          "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 62,
          "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 63,
          "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 64,
          "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 65,
          "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 66,
          "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 67,
          "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 68,
          "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 69,
          "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 70,
          "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 71,
          "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 72,
          "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 73,
          "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
        },
        {
          "line": 74,
          "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
        },
        {
          "line": 75,
          "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
        },
        {
          "line": 76,
          "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
        },
        {
          "line": 77,
          "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
        },
        {
          "line": 78,
          "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
        },
        {
          "line": 79,
          "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
        },
        {
          "line": 80,
          "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
        },
        {
          "line": 81,
          "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
        },
        {
          "line": 82,
          "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
        },
        {
          "line": 83,
          "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
        },
        {
          "line": 84,
          "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
        },
        {
          "line": 85,
          "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
        },
        {
          "line": 86,
          "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
        },
        {
          "line": 87,
          "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
        },
        {
          "line": 88,
          "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
        },
        {
          "line": 89,
          "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
        },
        {
          "line": 90,
          "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
        },
        {
          "line": 91,
          "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
        }
      ],
      "cells": [
        "Test",
        "First name",
        "",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 92,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;2"
    },
    {
      "cells": [
        "Test",
        "Last name",
        "",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 93,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;3"
    },
    {
      "cells": [
        "Test",
        "Email",
        "",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 94,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;4"
    },
    {
      "cells": [
        "Test",
        "Order id",
        "",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 95,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;5"
    },
    {
      "cells": [
        "Test",
        "Order number",
        "",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 96,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;6"
    },
    {
      "cells": [
        "Test",
        "Customer id",
        "",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 97,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;7"
    },
    {
      "cells": [
        "Test",
        "First name",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 98,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;8"
    },
    {
      "cells": [
        "Test",
        "Last name",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 99,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;9"
    },
    {
      "cells": [
        "Test",
        "Email",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 100,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;10"
    },
    {
      "cells": [
        "Test",
        "Order id",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 101,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;11"
    },
    {
      "cells": [
        "Test",
        "Order number",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 102,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;12"
    },
    {
      "cells": [
        "Test",
        "Customer id",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 103,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;13"
    },
    {
      "cells": [
        "Test",
        "First name",
        "",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 104,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;14"
    },
    {
      "cells": [
        "Test",
        "Last name",
        "",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 105,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;15"
    },
    {
      "cells": [
        "Test",
        "Email",
        "",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 106,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;16"
    },
    {
      "cells": [
        "Test",
        "Order id",
        "",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 107,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;17"
    },
    {
      "cells": [
        "Test",
        "Order number",
        "",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 108,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;18"
    },
    {
      "cells": [
        "Test",
        "Customer id",
        "",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 109,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;19"
    },
    {
      "cells": [
        "Test",
        "First name",
        "",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 110,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;20"
    },
    {
      "cells": [
        "Test",
        "Last name",
        "",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 111,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;21"
    },
    {
      "cells": [
        "Test",
        "Email",
        "",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 112,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;22"
    },
    {
      "cells": [
        "Test",
        "Order id",
        "",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 113,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;23"
    },
    {
      "cells": [
        "Test",
        "Order number",
        "",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 114,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;24"
    },
    {
      "cells": [
        "Test",
        "Customer id",
        "",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 115,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;25"
    },
    {
      "cells": [
        "Test",
        "First name",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 116,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;26"
    },
    {
      "cells": [
        "Test",
        "Last name",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 117,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;27"
    },
    {
      "cells": [
        "Test",
        "Email",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 118,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;28"
    },
    {
      "cells": [
        "Test",
        "Order id",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 119,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;29"
    },
    {
      "cells": [
        "Test",
        "Order number",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 120,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;30"
    },
    {
      "cells": [
        "Test",
        "Customer id",
        "",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 121,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;31"
    },
    {
      "cells": [
        "Test",
        "First name",
        "",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 122,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;32"
    },
    {
      "cells": [
        "Test",
        "Last name",
        "",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 123,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;33"
    },
    {
      "cells": [
        "Test",
        "Email",
        "",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 124,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;34"
    },
    {
      "cells": [
        "Test",
        "Order id",
        "",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 125,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;35"
    },
    {
      "cells": [
        "Test",
        "Order number",
        "",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 126,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;36"
    },
    {
      "cells": [
        "Test",
        "Customer id",
        "",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 127,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;37"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 128,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;38"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 129,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;39"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 130,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;40"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 131,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;41"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 132,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;42"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 133,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;43"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 134,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;44"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 135,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;45"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 136,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;46"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 137,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;47"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 138,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;48"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 139,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;49"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 140,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;50"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 141,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;51"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 142,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;52"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 143,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;53"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 144,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;54"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Always active"
      ],
      "line": 145,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;55"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 146,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;56"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 147,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;57"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 148,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;58"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 149,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;59"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 150,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;60"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 151,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;61"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 152,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;62"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 153,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;63"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 154,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;64"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 155,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;65"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 156,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;66"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 157,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;67"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 158,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;68"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 159,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;69"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 160,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;70"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 161,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;71"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 162,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;72"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Always active"
      ],
      "line": 163,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;73"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 164,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;74"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 165,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;75"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 166,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;76"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 167,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;77"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 168,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;78"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 169,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;79"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 170,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;80"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 171,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;81"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 172,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;82"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 173,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;83"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 174,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;84"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 175,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;85"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 176,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;86"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 177,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;87"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 178,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;88"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 179,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;89"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 180,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;90"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Date in the future"
      ],
      "line": 181,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;91"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 182,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;92"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 183,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;93"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 184,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;94"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 185,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;95"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 186,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;96"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 187,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;97"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 188,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;98"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 189,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;99"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 190,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;100"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 191,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;101"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 192,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;102"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 193,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;103"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 194,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;104"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 195,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;105"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 196,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;106"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 197,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;107"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 198,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;108"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Date in the future"
      ],
      "line": 199,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;109"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 200,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;110"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 201,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;111"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 202,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;112"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 203,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;113"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 204,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;114"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Percentage",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 205,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;115"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 206,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;116"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 207,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;117"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 208,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;118"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 209,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;119"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 210,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;120"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Fixed Amount",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 211,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;121"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 212,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;122"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 213,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;123"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 214,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;124"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 215,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;125"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 216,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;126"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Free Shipping",
        "10",
        "Entire order",
        "Between specific dates"
      ],
      "line": 217,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;127"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 218,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;128"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 219,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;129"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 220,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;130"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 221,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;131"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 222,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;132"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Percentage",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 223,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;133"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 224,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;134"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 225,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;135"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 226,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;136"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 227,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;137"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 228,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;138"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Fixed Amount",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 229,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;139"
    },
    {
      "cells": [
        "Test",
        "",
        "First name",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 230,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;140"
    },
    {
      "cells": [
        "Test",
        "",
        "Last name",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 231,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;141"
    },
    {
      "cells": [
        "Test",
        "",
        "Email",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 232,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;142"
    },
    {
      "cells": [
        "Test",
        "",
        "Order id",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 233,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;143"
    },
    {
      "cells": [
        "Test",
        "",
        "Order number",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 234,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;144"
    },
    {
      "cells": [
        "Test",
        "",
        "Customer id",
        "123",
        "Free Shipping",
        "10",
        "Selected products",
        "Between specific dates"
      ],
      "line": 235,
      "id": "coupon-creation;coupon-code-creation-for-app-unific;;145"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2033437180,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
    },
    {
      "line": 21,
      "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
    },
    {
      "line": 22,
      "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
    },
    {
      "line": 23,
      "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
    },
    {
      "line": 24,
      "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
    },
    {
      "line": 25,
      "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Always active|"
    },
    {
      "line": 26,
      "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
    },
    {
      "line": 27,
      "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
    },
    {
      "line": 28,
      "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
    },
    {
      "line": 29,
      "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
    },
    {
      "line": 30,
      "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
    },
    {
      "line": 31,
      "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|"
    },
    {
      "line": 32,
      "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
    },
    {
      "line": 33,
      "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
    },
    {
      "line": 34,
      "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
    },
    {
      "line": 35,
      "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
    },
    {
      "line": 36,
      "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
    },
    {
      "line": 37,
      "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Always active|"
    },
    {
      "line": 38,
      "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Always active|"
    },
    {
      "line": 39,
      "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Always active|"
    },
    {
      "line": 40,
      "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Always active|"
    },
    {
      "line": 41,
      "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Always active|"
    },
    {
      "line": 42,
      "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Always active|"
    },
    {
      "line": 43,
      "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Always active|"
    },
    {
      "line": 44,
      "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
    },
    {
      "line": 45,
      "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
    },
    {
      "line": 46,
      "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
    },
    {
      "line": 47,
      "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
    },
    {
      "line": 48,
      "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
    },
    {
      "line": 49,
      "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|"
    },
    {
      "line": 50,
      "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
    },
    {
      "line": 51,
      "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
    },
    {
      "line": 52,
      "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
    },
    {
      "line": 53,
      "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
    },
    {
      "line": 54,
      "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
    },
    {
      "line": 55,
      "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Always active|"
    },
    {
      "line": 56,
      "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 57,
      "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 58,
      "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 59,
      "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 60,
      "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 61,
      "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 62,
      "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 63,
      "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 64,
      "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 65,
      "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 66,
      "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 67,
      "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 68,
      "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 69,
      "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 70,
      "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 71,
      "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 72,
      "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 73,
      "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|"
    },
    {
      "line": 74,
      "value": "#      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
    },
    {
      "line": 75,
      "value": "#      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
    },
    {
      "line": 76,
      "value": "#      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
    },
    {
      "line": 77,
      "value": "#      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
    },
    {
      "line": 78,
      "value": "#      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
    },
    {
      "line": 79,
      "value": "#      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Date in the future|"
    },
    {
      "line": 80,
      "value": "#      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
    },
    {
      "line": 81,
      "value": "#      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
    },
    {
      "line": 82,
      "value": "#      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
    },
    {
      "line": 83,
      "value": "#      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
    },
    {
      "line": 84,
      "value": "#      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
    },
    {
      "line": 85,
      "value": "#      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|"
    },
    {
      "line": 86,
      "value": "#      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
    },
    {
      "line": 87,
      "value": "#      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
    },
    {
      "line": 88,
      "value": "#      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
    },
    {
      "line": 89,
      "value": "#      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
    },
    {
      "line": 90,
      "value": "#      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
    },
    {
      "line": 91,
      "value": "#      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|"
    }
  ],
  "line": 92,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"First name\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Entire order\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Between specific dates\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 14203308062,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 5394796516,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 165084142,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "duration": 9944419154,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "duration": 125705564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "duration": 2667889367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name",
      "offset": 49
    },
    {
      "val": "",
      "offset": 73
    },
    {
      "val": "123",
      "offset": 90
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "duration": 3422584956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "duration": 3380580546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entire order",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "duration": 127321223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Between specific dates",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "duration": 3934451624,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "duration": 10062166539,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "duration": 1488920621,
  "status": "passed"
});
formatter.after({
  "duration": 80972233,
  "status": "passed"
});
formatter.before({
  "duration": 1494318808,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
 formatter.result({
  "duration": 100028512305,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: name\u0027 (tried for 100 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat com.unific.cucumber.Hooks.explicitWait(Hooks.java:34)\n\tat com.unific.cucumber.StepDefs.Snippets.user_enters_snippet_name_as_something(Snippets.java:72)\n\tat ✽.And User enters Snippet Name as \"Test\"(CodeCouponCreation.feature:10)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"name\"}\n  (Session info: chrome\u003d65.0.3325.162)\n  (Driver info: chromedriver\u003d2.36.540471 (9c759b81a907e70363c6312294d30b6ccccc2752),platform\u003dLinux 4.13.0-41-generic x86_64) (WARNING: The serveformatter.result({
  "duration": 43489956694,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 5436169361,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 144687544,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "duration": 20573194562,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "duration": 99965395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "duration": 1516280806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name",
      "offset": 49
    },
    {
      "val": "",
      "offset": 72
    },
    {
      "val": "123",
      "offset": 89
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "duration": 3384011909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "duration": 3346148913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entire order",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "duration": 96806164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Between specific dates",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "duration": 3799970804,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "duration": 10054565059,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "duration": 1768630705,
  "status": "passed"
});
formatter.after({
  "duration": 74555229,
  "status": "passed"
});
formatter.before({
  "duration": 1494377631,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"Email\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Entire order\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Between specific dates\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 21058997078,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 6992264190,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 156682094,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "duration": 26860194401,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "duration": 101542950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "duration": 2599333308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 49
    },
    {
      "val": "",
      "offset": 68
    },
    {
      "val": "123",
      "offset": 85
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "duration": 3380166711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "duration": 3327396721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entire order",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "duration": 133151019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Between specific dates",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "duration": 3851559689,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "duration": 10064249810,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "duration": 1748359418,
  "status": "passed"
});
formatter.after({
  "duration": 123209672,
  "status": "passed"
});
formatter.before({
  "duration": 2561217964,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"Order id\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Entire order\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Between specific dates\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
ippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 76898336,
  "status": "passed"
});
formatter.before({
  "duration": 1226865461,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"Email\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Selected products\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Date in the future\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 22072853301,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 6936453453,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 109745622,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "duration": 21725146952,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "duration": 180864793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "duration": 2705326573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 49
    },
    {
      "val": "",
      "offset": 68
    },
    {
      "val": "123",
      "offset": 85
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "duration": 3420917681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "duration": 3347918999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selected products",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "duration": 5337553947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date in the future",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "duration": 3561512577,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "duration": 10046222347,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "duration": 1468128528,
  "status": "passed"
});
formatter.after({
  "duration": 79135016,
  "status": "passed"
});
formatter.before({
  "duration": 1509941300,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"Order id\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Selected products\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Date in the future\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 29698206799,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 4743344161,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 182499778,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "duration": 14080441189,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "duration": 105417084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "duration": 3052398563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order id",
      "offset": 49
    },
    {
      "val": "",
      "offset": 71
    },
    {
      "val": "123",
      "offset": 88
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "duration": 3402437144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "duration": 3391574479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selected products",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "duration": 5303543389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date in the future",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "duration": 3558863552,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "duration": 10049236992,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "duration": 1800338899,
  "status": "passed"
});
formatter.after({
  "duration": 71315685,
  "status": "passed"
});
formatter.before({
  "duration": 3956515179,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"Order number\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Selected products\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Date in the future\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 13782528330,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 6855990811,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "duration": 123090590,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "duration": 11787999296,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "duration": 113437201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "duration": 2620876906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order number",
      "offset": 49
    },
    {
      "val": "",
      "offset": 75
    },
    {
      "val": "123",
      "offset": 92
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "duration": 3465872361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "duration": 3354291780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selected products",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "duration": 5351564289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date in the future",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "duration": 3674628934,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "duration": 10044905813,
  "status": "passed"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "duration": 1550535886,
  "status": "passed"
});
formatter.after({
  "duration": 78303390,
  "status": "passed"
});
formatter.before({
  "duration": 1378055771,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"Customer id\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Percentage\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Selected products\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Date in the future\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "duration": 9113736784,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "duration": 30322522897,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d65.0.3325.162)\n  (Driver info: chromedriver\u003d2.36.540471 (9c759b81a907e70363c6312294d30b6ccccc2752),platform\u003dLinux 4.13.0-41-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027WKS-195\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-41-generic\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dLINUX, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540471 (9c759b81a907e70363c6312294d30b6ccccc2752), userDataDir\u003d/tmp/.org.chromium.Chromium.2BMIid}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d65.0.3325.162, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5030495cc0f31c234e671ccec1248ecf\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027email\u0027]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.toString(Unknown Source)\n\tat java.base/java.lang.String.valueOf(String.java:2801)\n\tat java.base/java.lang.StringBuilder.append(StringBuilder.java:135)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:293)\n\tat java.base/java.lang.String.valueOf(String.java:2801)\n\tat java.base/java.lang.StringBuilder.append(StringBuilder.java:135)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\n\tat com.unific.cucumber.Hooks.explicitWait(Hooks.java:34)\n\tat com.unific.cucumber.StepDefs.Login.user_enters_valid_email_and_password(Login.java:53)\n\tat ✽.When User Enters valid Email and Password(CodeCouponCreation.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Snippets.user_is_able_to_navigate_to_snippets_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Snippets.user_selects_to_create_a_new_snippet()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    }
  ],
  "location": "Snippets.user_enters_snippet_name_as_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer id",
      "offset": 49
    },
    {
      "val": "",
      "offset": 74
    },
    {
      "val": "123",
      "offset": 91
    }
  ],
  "location": "Snippets.user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Percentage",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "Snippets.user_selects_discount_type_as_something_and_discount_value_as_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Selected products",
      "offset": 28
    }
  ],
  "location": "Snippets.user_selects_applies_to_as_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Date in the future",
      "offset": 30
    }
  ],
  "location": "Snippets.user_selects_active_dates_as_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Snippets.user_selects_to_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Snippets.user_is_able_to_see_the_generated_coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29854968,
  "status": "passed"
});
formatter.before({
  "duration": 1299589430,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Coupon Code Creation for App Unific",
  "description": "",
  "id": "coupon-creation;coupon-code-creation-for-app-unific;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User is able to navigate to Snippets Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects to create a new Snippet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Snippet Name as \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects Coupon Code Format with Prefix1 as \"First name\" Prefix2 as \"\" and Suffix as \"123\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects Discount Type as \"Fixed Amount\" and Discount value as \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects applies to as \"Selected products\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects active dates as \"Date in the future\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects to save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to see the generated Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
