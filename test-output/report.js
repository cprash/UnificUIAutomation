$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminAppInstall.feature");
formatter.feature({
  "line": 1,
  "name": "App Install for Unific",
  "description": "",
  "id": "app-install-for-unific",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14156830431,
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
  "duration": 28690187025,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_business()"
});
formatter.result({
  "duration": 8205722191,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_create_a_development_store()"
});
formatter.result({
  "duration": 6048100322,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_login_information(DataTable)"
});
formatter.result({
  "duration": 1675674569,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_store_details(DataTable)"
});
formatter.result({
  "duration": 497955053,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_saves_the_store_details()"
});
formatter.result({
  "duration": 32885449188,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_navigates_to_apps_for_business()"
});
formatter.result({
  "duration": 26125991751,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_is_able_to_create_app_store_listing()"
});
formatter.result({
  "duration": 32616884186,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_installs_the_unlisted_app()"
});
formatter.result({
  "duration": 15338285487,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_validates_that_the_landing_page_is_unific_signup()"
});
formatter.result({
  "duration": 28892810883,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_signups_at_unific(DataTable)"
});
formatter.result({
  "duration": 18408244397,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_validates_big_price(DataTable)"
});
formatter.result({
  "duration": 14786092995,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_join()"
});
formatter.result({
  "duration": 30256374324,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_approve_charges()"
});
formatter.result({
  "duration": 13753917094,
  "status": "passed"
});
formatter.after({
  "duration": 603917566,
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
formatter.before({
  "duration": 45233130739,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting 45 seconds for Firefox to start.\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027WKS-195\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-41-generic\u0027, java.version: \u00279.0.4\u0027\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:112)\n\tat org.openqa.selenium.firefox.XpiDriverService.start(XpiDriverService.java:97)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:254)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:137)\n\tat com.unific.cucumber.Browser.setUp(Browser.java:82)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:31547/hub/status] to be available after 45001 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:102)\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:110)\n\t... 47 more\nCaused by: java.util.concurrent.TimeoutException\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:147)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:77)\n\t... 48 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "Create Development Store",
  "description": "",
  "id": "creating-a-new-dev-store;create-development-store",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User has successfully logged into Shopify Partners",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects a Business",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects to create a developement store",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Login Information",
  "rows": [
    {
      "cells": [
        "StoreName",
        "Password",
        "Confirm Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "App_Install_Testing",
        "Testing@123!",
        "Testing@123!"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
      "line": 11
    },
    {
      "cells": [
        "TestAddress",
        "TestCity",
        "12345",
        "Alabama",
        "United States"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User saves the store details",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "DevStore is created with a Store URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AppInstall.user_has_successfully_logged_into_shopify_partners()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_selects_a_business()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_selects_to_create_a_development_store()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_enters_login_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_enters_store_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppInstall.user_saves_the_store_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 208922,
  "error_message": "java.lang.NullPointerException\n\tat com.unific.cucumber.Browser.tearDown(Browser.java:193)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login  Feature",
  "description": "",
  "id": "login--feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 45054154527,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting 45 seconds for Firefox to start.\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027WKS-195\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-41-generic\u0027, java.version: \u00279.0.4\u0027\nDriver info: driver.version: FirefoxDriver\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:112)\n\tat org.openqa.selenium.firefox.XpiDriverService.start(XpiDriverService.java:97)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:254)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:137)\n\tat com.unific.cucumber.Browser.setUp(Browser.java:82)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:19631/hub/status] to be available after 45000 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:102)\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:110)\n\t... 47 more\nCaused by: java.util.concurrent.TimeoutException\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:147)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:77)\n\t... 48 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Valid Login Into Unific",
  "description": "",
  "id": "login--feature;verify-valid-login-into-unific",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is at Unific Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enters valid Email and Password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is successfully Logged In",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_at_unific_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enters_valid_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_clicks_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_is_successfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 151817,
  "error_message": "java.lang.NullPointerException\n\tat com.unific.cucumber.Browser.tearDown(Browser.java:193)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
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