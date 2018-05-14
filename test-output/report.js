$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminAppInstall.feature");
formatter.feature({
  "line": 1,
  "name": "App Install for Unific",
  "description": "",
  "id": "app-install-for-unific",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2418110974,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Admin Installation on Shopify Dev Store [ PD-1517 ] [PD-1529] [PD-1536] [PD-1537] [PD-1545]",
  "description": "",
  "id": "app-install-for-unific;admin-installation-on-shopify-dev-store-[-pd-1517-]-[pd-1529]-[pd-1536]-[pd-1537]-[pd-1545]",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User has successfully logged into Shopify Partner",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects Business",
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
        "App_AdminInstall_Testing",
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
  "name": "User navigates to Apps in the concerned business",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is able to Create App Store Listing or install app from appstore",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User installs the unlisted or listed App",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User validates that the landing page is unific signup",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User signups at unific",
  "rows": [
    {
      "cells": [
        "Username",
        "Domain Name",
        "Password"
      ],
      "line": 20
    },
    {
      "cells": [
        "unific_",
        "@damcogroup.com",
        "Testing@123!"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validates Big Price",
  "rows": [
    {
      "cells": [
        "Big Price"
      ],
      "line": 23
    },
    {
      "cells": [
        "$49"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects Join",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects to Approve charges",
  "keyword": "And "
});
formatter.match({
  "location": "AppInstall.user_has_successfully_logged_into_shopify_partner()"
});
formatter.result({
  "duration": 22548033275,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_business()"
});
formatter.result({
  "duration": 7665937337,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_create_a_development_store()"
});
formatter.result({
  "duration": 7199517408,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_login_information(DataTable)"
});
formatter.result({
  "duration": 561643921,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_store_details(DataTable)"
});
formatter.result({
  "duration": 655872755,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_saves_the_store_details()"
});
formatter.result({
  "duration": 34047967901,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_navigates_to_apps_for_business()"
});
formatter.result({
  "duration": 25215679949,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_is_able_to_create_app_store_listing()"
});
formatter.result({
  "duration": 35981595166,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_installs_the_unlisted_app()"
});
formatter.result({
  "duration": 72759220384,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_validates_that_the_landing_page_is_unific_signup()"
});
formatter.result({
  "duration": 20040869967,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_signups_at_unific(DataTable)"
});
formatter.result({
  "duration": 17948523473,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_validates_big_price(DataTable)"
});
formatter.result({
  "duration": 30513572217,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_join()"
});
formatter.result({
  "duration": 29967202228,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_approve_charges()"
});
formatter.result({
  "duration": 135446833,
  "status": "passed"
});
formatter.after({
  "duration": 96956455,
  "status": "passed"
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
});tpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getWindowHandles(RemoteWebDriver.java:546)\n\tat com.unific.cucumber.StepDefs.AppInstall.user_is_able_to_create_app_store_listing(AppInstall.java:318)\n\tat ✽.And User is able to Create App Store Listing or install app from appstore(AdminAppInstall.feature:16)\n",
  "status": "failed"
});
formatter.match({
  "location": "AppInstall.user_installs_the_unlisted_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_validates_that_the_landing_page_is_unific_signup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_signups_at_unific(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_validates_big_price(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_selects_join()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_selects_to_approve_charges()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 68202903,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027WKS-195\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-41-generic\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/tmp/rust_mozprofile.1Ots8Ky1tkJ0, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d60.0, platformVersion\u003d4.13.0-41-generic, moz:processID\u003d20927, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dlinux, moz:webdriverClick\u003dtrue}]\nSession ID: bd7f87a0-e855-40a3-910a-33a4a0899720\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:537)\n\tat com.unific.cucumber.Browser.tearDown(Browser.java:184)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
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
});