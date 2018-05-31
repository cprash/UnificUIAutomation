package com.unific.cucumber;

import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;


/**
 * Created  on 16/03/18.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/Resources/com/unific/cucumber/Features"},
        plugin= {"pretty","html:test-output","json:cucumber.json", "junit:junit_xml/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-Extent-reports/report.html"},
        tags= {"~@ignore"},
        dryRun =false
)
public class RunCukesTest {


//     @BeforeClass
//     public static void before() {
//        // System.out.println("12345678");
//         // String timestamp=new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
//          //String value="--plugin com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-Extent-reports/"+timestamp+"/report.html";
//        //  String value="--plugin html:test-output/"+timestamp;
//        //  System.out.println(value);
////        System.setProperty("cucumber.options","--plugin html:test-output");
//        //  System.setProperty("cucumber.options", value);
//        // String property = System.getProperty("cucumber.options");
//        // System.out.print(property);
//     }

    @AfterClass
    public static void writeExtentReport() {
        //String property = System.getProperty("cucumber.options");
        //System.out.print(property);
        Properties prop;
        FileInputStream f = null;
        try {
            f = new FileInputStream(new File("src/test/Resources/com/unific/cucumber/config.properties"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        prop = new Properties();
        try {
            prop.load(f);
        } catch (IOException e) {
            e.printStackTrace();
        }


        try {

            Reporter.loadXMLConfig(new File(prop.getProperty("reportConfigPath")));
        }
        catch (Exception e){}

        String timestamp=new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());

        File reportOutputDirectory = new File("Reports/AdvancedCucumberReports/"+timestamp);
        List<String> jsonFiles = new ArrayList<>();
        jsonFiles.add("cucumber.json");


        Configuration config = new Configuration(reportOutputDirectory, "UnificCucumber");
        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, config);
        Reportable result = reportBuilder.generateReports();

    }


}