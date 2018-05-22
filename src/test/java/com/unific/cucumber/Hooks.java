package com.unific.cucumber;


import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Properties;

/**
 * Created by Rahul Sharma on 16/03/2018
 */
public class Hooks {
    private Properties prop;
    private WebDriver driver;
    private Browser browser;




    public void explicitWait(WebDriver driver, int time, WebElement element){
        (new WebDriverWait(driver,time)).until(ExpectedConditions.visibilityOf(element));
    }

    public String environment()
    {

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
        String environment=prop.getProperty("Environment");
        System.out.println(environment);

        if(environment.equalsIgnoreCase("qa"))
            return prop.getProperty("QAurl");
        else if(environment.equalsIgnoreCase("dev"))
            return prop.getProperty("DEVurl");
        else if(environment.equalsIgnoreCase("stage"))
            return prop.getProperty("STAGEurl");
        else if(environment.equalsIgnoreCase("prod"))
            return prop.getProperty("PRODurl");
        else
            return "No environment set";

    }

    public List<String> EnvConfig()
    {
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
        String environment = prop.getProperty("Environment");
        String shopifyPartnerEmail=null;
        String shopifyPartnerPassword=null;
        String unificURL=null;
        String BusinessPrefix="https://partners.shopify.com/";
        String BusinessSuffix="/development_stores";
        String BusinessURL=null;
        List<String> info=new ArrayList<String>();


        if(environment.equalsIgnoreCase("qa"))
        {
            shopifyPartnerEmail = prop.getProperty("shopifyPartnerEmailqa");
            shopifyPartnerPassword = prop.getProperty("shopifyPartnerPasswordqa");
            unificURL = prop.getProperty("QAurl");
            String qAappBusinessId = prop.getProperty("QAappBusinessId");
            BusinessURL=BusinessPrefix+qAappBusinessId+BusinessSuffix;

        }
        else if(environment.equalsIgnoreCase("dev"))
        {
            shopifyPartnerEmail = prop.getProperty("shopifyPartnerEmaildev");
            shopifyPartnerPassword = prop.getProperty("shopifyPartnerPassworddev");
            unificURL = prop.getProperty("DEVurl");
            String deVappBusinessId = prop.getProperty("DEVappBusinessId");
            BusinessURL=BusinessPrefix+deVappBusinessId+BusinessSuffix;

        }

        else if(environment.equalsIgnoreCase("stage"))
        {
            shopifyPartnerEmail = prop.getProperty("shopifyPartnerEmailstage");
            shopifyPartnerPassword = prop.getProperty("shopifyPartnerPasswordstage");
            unificURL = prop.getProperty("STAGEurl");
            String stagEappBusinessId = prop.getProperty("STAGEappBusinessId");
            BusinessURL=BusinessPrefix+stagEappBusinessId+BusinessSuffix;

        }

        else if(environment.equalsIgnoreCase("prod"))
        {
            shopifyPartnerEmail = prop.getProperty("shopifyPartnerEmailprod");
            shopifyPartnerPassword = prop.getProperty("shopifyPartnerPasswordprod");
            unificURL = prop.getProperty("PRODurl");
            String proDappBusinessId = prop.getProperty("PRODappBusinessId");
            BusinessURL=BusinessPrefix+proDappBusinessId+BusinessSuffix;
        }

        info.add(shopifyPartnerEmail);
        info.add(shopifyPartnerPassword);
        info.add(unificURL);
        info.add(BusinessURL);

        return info;

    }
    public void doubleClick(WebDriver driver,WebElement element) {
        try {
            Actions action = new Actions(driver).doubleClick(element);
            action.build().perform();

            System.out.println("Double clicked the element");
        } catch (StaleElementReferenceException e) {
            System.out.println("Element is not attached to the page document "
                    + e.getStackTrace());
        } catch (NoSuchElementException e) {
            System.out.println("Element " + element + " was not found in DOM "
                    + e.getStackTrace());
        } catch (Exception e) {
            System.out.println("Element " + element + " was not clickable "
                    + e.getStackTrace());
        }
    }
    public void click(WebDriver driver,WebElement element)
    {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", element);

    }
    public void setAttribute(WebDriver driver,WebElement element, String attName, String attValue) {

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);",
                element, attName, attValue);
    }



}
