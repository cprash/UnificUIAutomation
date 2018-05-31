# Gherkin-UI-Tests
Gherkin UI Tests designed in Java using PageObjectMoel following the Page Factory concept
with Maven Integration. The framework is using the Selenium Webdriver API,CucumberAPI,Java9 API and JUnit 4 API

# Getting Started

* Install IntelliJ Community Version from 
  https://www.jetbrains.com/idea/

* Clone the project from the below Repository
  https://github.com/unificdotcom/ui-automation-java

* Import the project in IntelliJ

# Running the tests 

* Under /src/test/java , fetch for the RunCukesTest.java class 
* Right click on the class and Run the test

# Prerequisite 
* JDK should be setup for the project
* Make sure the Java complier byte code version is set as 1.8

# External Dependencies used

You can check them out under the pom.xml

* JUnit 4.12
* Cucumber-junit
* Cucumber-Java
* Selenium-Java
* Extent Reports by aventstack
* Advanced Cucumber Reporting net.masterthaught

# Reporting Test Execution

Currently the framework is supporting JSON, XML and HTML and Extent HTML reports

* JSON reports are stored @ json_output
* XML reports are stored @ junit_xml
* HTMl reports are stored @ test-outout/index.html
* Extent reports under target/Cucumber-Extent-Reports
* Advanced Cucumber Reporting using the net.masterthaught fails maven plugin

# Extra features

 * The Framework now supports execution on Chrome and Firefox with headless Options Available and also Safari,by 
   simply changing the the browser property @ src/test/Resources/com/unific/cucumber/config.properties 
   to either chrome or firefox or firefoxheadless or chromeheadless or chrome or safari
 * The Framework currently supports execution on all the 4 environments:qa,dev,stage,prod
    by simply changing the Environment property @ src/test/Resources/com/unific/cucumber/config.properties
    
 # Coding styles
 
 * Page Objects are maintained @ /src/test/java/com/unific/cucumber/Repo
 * Step Definations are maintained @ /src/test/java/com/unific/cucumber/StepDefs

# Built With
* PageFactory for identifying page objects
* Scripting in Java

# Built By

Rahul-Sharma

