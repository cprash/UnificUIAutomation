package com.unific.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created  on 16/03/18.
 */

@RunWith(Cucumber.class)
@CucumberOptions( features = {"src/test/Resources/com/unific/cucumber/Features"},
        format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
        tags= {"~@ignore"},
        dryRun =false
)
public class RunCukesTest {
}
