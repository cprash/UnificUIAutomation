Feature: Coupon Creation

  Scenario Outline: Coupon Code Creation for App Unific

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

    Examples:
      | snippet | prefix1           | prefix2          | suffix | discount type | discount value | applies to       | active date  |
      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    | First name        |                  | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    | Last name         |                  | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    | Email             |                  | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    | Order id          |                  | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    | Order number      |                  | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    | First name        |                  | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    | Email             |                  | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    | First name        |                  | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    | Last name         |                  | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    | Email             |                  | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    | Order id          |                  | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    | Order number      |                  | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    | Customer id       |                  | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    | First name        |                  | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    | Last name         |                  | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    | Email             |                  | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    | Order id          |                  | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    | Order number      |                  | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    | Customer id       |                  | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    | First name        |                  | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    | Last name         |                  | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    | Email             |                  | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    | Order id          |                  | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    | Order number      |                  | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    | Customer id       |                  | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    |                   |   First name     | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    |                   |   Last name      | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    |                   |   Email          | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    |                   |   Order id       | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    |                   |   Order number   | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    |                   |   Customer id    | 123    | Percentage    | 10             | Entire order     | Always active|
      | Test    |                   |   First name     | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    |                   |   Last name      | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    |                   |   Email          | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    |                   |   Order id       | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    |                   |   Order number   | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    |                   |   Customer id    | 123    | Fixed Amount  | 10             | Entire order     | Always active|
      | Test    |                   |   First name     | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    |                   |   Last name      | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    |                   |   Email          | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    |                   |   Order id       | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    |                   |   Order number   | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    |                   |   Customer id    | 123    | Free Shipping | 10             | Entire order     | Always active|
      | Test    |                   |   First name     | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    |                   |   Last name      | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    |                   |   Email          | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    |                   |   Order id       | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    |                   |   Order number   | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    |                   |   Customer id    | 123    | Percentage    | 10             | Selected products | Always active|
      | Test    |                   |   First name     | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    |                   |   Last name      | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    |                   |   Email          | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    |                   |   Order id       | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    |                   |   Order number   | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    |                   |   Customer id    | 123    | Fixed Amount  | 10             | Selected products | Always active|
      | Test    |                   |   First name     | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    |                   |   Last name      | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    |                   |   Email          | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    |                   |   Order id       | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    |                   |   Order number   | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    |                   |   Customer id    | 123    | Free Shipping | 10             | Selected products | Always active|
      | Test    |                   |   First name     | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    |                   |   Last name      | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    |                   |   Email          | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    |                   |   Order id       | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    |                   |   Order number   | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    |                   |   Customer id    | 123    | Percentage    | 10             | Entire order     | Date in the future|
      | Test    |                   |   First name     | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    |                   |   Last name      | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    |                   |   Email          | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    |                   |   Order id       | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    |                   |   Order number   | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    |                   |   Customer id    | 123    | Fixed Amount  | 10             | Entire order     | Date in the future|
      | Test    |                   |   First name     | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    |                   |   Last name      | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    |                   |   Email          | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    |                   |   Order id       | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    |                   |   Order number   | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    |                   |   Customer id    | 123    | Free Shipping | 10             | Entire order     | Date in the future|
      | Test    |                   |   First name     | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    |                   |   Last name      | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    |                   |   Email          | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    |                   |   Order id       | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    |                   |   Order number   | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    |                   |   Customer id    | 123    | Percentage    | 10             | Selected products | Date in the future|
      | Test    |                   |   First name     | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    |                   |   Last name      | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    |                   |   Email          | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    |                   |   Order id       | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    |                   |   Order number   | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    |                   |   Customer id    | 123    | Fixed Amount  | 10             | Selected products | Date in the future|
      | Test    |                   |   First name     | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    |                   |   Last name      | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    |                   |   Email          | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    |                   |   Order id       | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    |                   |   Order number   | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    |                   |   Customer id    | 123    | Free Shipping | 10             | Selected products | Date in the future|
      | Test    |                   |   First name     | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Last name      | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Email          | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Order id       | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Order number   | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Customer id    | 123    | Percentage    | 10             | Entire order     | Between specific dates|
      | Test    |                   |   First name     | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Last name      | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Email          | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Order id       | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Order number   | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Customer id    | 123    | Fixed Amount  | 10             | Entire order     | Between specific dates|
      | Test    |                   |   First name     | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Last name      | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Email          | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Order id       | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Order number   | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    |                   |   Customer id    | 123    | Free Shipping | 10             | Entire order     | Between specific dates|
      | Test    |                   |   First name     | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    |                   |   Last name      | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    |                   |   Email          | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    |                   |   Order id       | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    |                   |   Order number   | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    |                   |   Customer id    | 123    | Percentage    | 10             | Selected products | Between specific dates|
      | Test    |                   |   First name     | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    |                   |   Last name      | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    |                   |   Email          | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    |                   |   Order id       | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    |                   |   Order number   | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    |                   |   Customer id    | 123    | Fixed Amount  | 10             | Selected products | Between specific dates|
      | Test    |                   |   First name     | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    |                   |   Last name      | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    |                   |   Email          | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    |                   |   Order id       | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    |                   |   Order number   | 123    | Free Shipping | 10             | Selected products | Between specific dates|
      | Test    |                   |   Customer id    | 123    | Free Shipping | 10             | Selected products | Between specific dates|
