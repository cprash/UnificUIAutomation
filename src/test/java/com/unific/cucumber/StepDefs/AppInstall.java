package com.unific.cucumber.StepDefs;

import com.unific.cucumber.Browser;
import com.unific.cucumber.Hooks;
import com.unific.cucumber.Repo.PostSignUp;
import com.unific.cucumber.Repo.ShopifyPartners;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.Properties;
import java.util.Set;


public class AppInstall {
    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private ShopifyPartners shopifyPartners;
    private PostSignUp postSignUp;

    public String storeurl;
    public String devstoreurl;

    Hooks hooks=new Hooks();


    public AppInstall(Browser browser){this.browser=browser;}

    @Given("^User has successfully logged into Shopify Partners$")
    public void user_has_successfully_logged_into_shopify_partners()  {
    driver=browser.getDriver();
    prop=browser.getProp();
    shopifyPartners=browser.getShopifyPartners();
    driver.get(prop.getProperty("shopifyPartnerUrl"));
    shopifyPartners.getPartnerloginlink().click();
    shopifyPartners=browser.getShopifyPartners();
    shopifyPartners.getShopifyEmail().sendKeys(prop.getProperty("shopifyPartnerEmail"));
    shopifyPartners.getShopifyPassword().sendKeys(prop.getProperty("shopifyPartnerPassword"));
    //shopifyPartners.getShopifyloginBtn().click();
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", shopifyPartners.getShopifyloginBtn());

    }

    @When("^User selects a Business$")
    public void user_selects_a_business()  {
        hooks.explicitWait(driver,30,shopifyPartners.getPartnerApp_Install_Testing());
        shopifyPartners.getPartnerApp_Install_Testing().click();
    }

    @And("^User selects to create a developement store$")
    public void user_selects_to_create_a_development_store() {
        shopifyPartners.getCreatestoreLink().click();
    }

    @And("^User enters Login Information$")
    public void user_enters_login_information(DataTable logininfo)  {
        List<List<String>> data = logininfo.raw();
        shopifyPartners.getStoreName().sendKeys(data.get(1).get(0));
        shopifyPartners.getPassword().sendKeys(data.get(1).get(1));
        shopifyPartners.getConfirmPassword().sendKeys(data.get(1).get(2));
    }



    @And("^User enters Store Details$")
    public void user_enters_store_details(DataTable storeinfo)  {
        List<List<String>> data = storeinfo.raw();
        shopifyPartners.getCreatestoreAddress().sendKeys(data.get(1).get(0));
        //while(shopifyPartners.getCreatestoreCity().getAttribute("value")!=null)
        //    shopifyPartners.getCreatestoreCity().sendKeys(Keys.BACK_SPACE);
        shopifyPartners.getCreatestoreCity().sendKeys(Keys.CONTROL,"a",Keys.DELETE);
        shopifyPartners.getCreatestoreCity().sendKeys(data.get(1).get(1));
        shopifyPartners.getCreatestoreZip().sendKeys(data.get(1).get(2));
        Select select=new Select(shopifyPartners.getCreatestoreState());
        select.selectByVisibleText(data.get(1).get(3));
        Select select1=new Select(shopifyPartners.getCreatestoreCountry());
        select1.selectByVisibleText(data.get(1).get(4));
    }

    @And("^User saves the store details$")
    public void user_saves_the_store_details() throws InterruptedException {
       shopifyPartners.getCreatestoreSave().click();
       Thread.sleep(20000);
       //hooks.explicitWait(driver,30,shopifyPartners.getShopifypartnerprofileLink());
       //shopifyPartners.getStoreName().click();
        //storeurl=shopifyPartners.getStoreURl().getText();

    }

    @And("^User navigates to Apps in the concerned business$")
    public void user_navigates_to_apps_for_integrations_business() throws InterruptedException {
        driver.navigate().to(prop.getProperty("shopifyPartnerUrl"));
        shopifyPartners.getPartnerloginlink().click();
        shopifyPartners.getIntegrationsLink().click();
        shopifyPartners.getAppsLink().click();

    }

    @And("^User is able to Create App Store Listing$")
    public void user_is_able_to_create_app_store_listing() {
        shopifyPartners.getUnificqaLink().click();
        shopifyPartners.getCreateappstorelistingLink().click();
        shopifyPartners.getEditappsubmissionformLink().click();
        String handle=driver.getWindowHandle();
        //System.out.println(handle);
        shopifyPartners.getViewapplistingLink().click();
        Set<String> handles = driver.getWindowHandles();
        handles.remove(handle);
        String window = handles.iterator().next();
        //System.out.println(window);
        driver.switchTo().window(window);
        shopifyPartners.getGetLink().click();
        hooks.explicitWait(driver,30,shopifyPartners.getLoginSubmit());
        storeurl= shopifyPartners.getStoreURLtxt().getAttribute("value");
        shopifyPartners.getLoginSubmit().click();

    }

    @And("^User installs the unlisted App$")
    public void user_installs_the_unlisted_app()  {
        hooks.explicitWait(driver,30,shopifyPartners.getInstallunlistedappLink());
        shopifyPartners.getInstallunlistedappLink().click();
    }

    @Then("^User selects mandatory fields and also verifies pre filled information$")
    public void user_enters_company_information_and_also_verifies_pre_filled_information(DataTable storeinfo) throws InterruptedException {
        List<List<String>> data = storeinfo.raw();
        postSignUp =browser.getPostSignUp();
        hooks.explicitWait(driver,30, postSignUp.getIndustryList());
        Thread.sleep(5000);
        postSignUp.getIndustryList().click();
        List<WebElement> industryListoptions = postSignUp.getIndustryListoptions();
        for(WebElement x:industryListoptions)
        {
            if(x.getText().equals(data.get(1).get(0)))
            { x.click(); break;}
        }

        //Select select = new Select(postSignUp.getIndustryList());
        //select.selectByVisibleText(data.get(1).get(0));
        postSignUp.getDescribeyourselfList().click();
        List<WebElement> describeyourselfListoptions = postSignUp.getDescribeyourselfListoptions();
        for(WebElement y:describeyourselfListoptions)
        {
            if(y.getText().equals(data.get(1).get(1)))
            { y.click(); break;}
        }

        //Select select1 = new Select(postSignUp.getDescribeyourselfList());
        //select1.selectByVisibleText(data.get(1).get(1));

        Assert.assertEquals(data.get(1).get(2), postSignUp.getStorename().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(3), postSignUp.getStreetaddress().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(4), postSignUp.getCity().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(5), postSignUp.getZip().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(6), postSignUp.getState().getText());
        Assert.assertEquals(data.get(1).get(7), postSignUp.getCountry().getText());
        Assert.assertEquals(data.get(1).get(2)+" Admin", postSignUp.getFullnameTxt().getAttribute("value"));


        postSignUp.getNextBtn().click();
    }

    @And("^User skips the connection to Facebook and Starts using Unific$")
    public void user_skips_the_connection_to_facebook_and_starts_using_unific()  {
       hooks.explicitWait(driver,10, postSignUp.getSkipBtn());
       postSignUp.getSkipBtn().click();
       hooks.explicitWait(driver,10, postSignUp.getStartusingunificLink());
       postSignUp.getStartusingunificLink().click();
        System.out.println("StoreURl: "+devstoreurl);
        System.out.println("UnificLoginEmail : "+Login.unificloginemail);
        System.out.println("UnificLoginPassword : "+Login.str3);
    }

    @And("^User skips connection to Facebook and Starts using Unific$")
    public void user_skips_connection_to_facebook_and_starts_using_unific()  {
        hooks.explicitWait(driver,10, postSignUp.getSkipBtn());
        postSignUp.getSkipBtn().click();
        hooks.explicitWait(driver,10, postSignUp.getStartusingunificLink());
        postSignUp.getStartusingunificLink().click();
        System.out.println("StoreURl: "+storeurl);
        System.out.println("UnificLoginEmail : "+Login.unificloginemail);
        System.out.println("UnificLoginPassword : "+Login.str3);
    }

    @Then("^DevStore is created with a Store URL$")
    public void devstore_is_created_with_a_store_url()  {
         hooks.explicitWait(driver,30,shopifyPartners.getDevstoreURL());
         devstoreurl = shopifyPartners.getDevstoreURL().getText();
    }


    @And("^User submits the Store URL at unific and installs the Unlisted App$")
    public void user_submits_the_store_url_at_unific_and_installs_the_unlisted_app() {
        driver=browser.getDriver();
        postSignUp=browser.getPostSignUp();
        hooks.explicitWait(driver,30,postSignUp.getSignupStorenameTxt());
       // while(postSignUp.getSignupStorenameTxt().getAttribute("value")!=null)
         //       postSignUp.getSignupStorenameTxt().sendKeys(Keys.BACK_SPACE);
        postSignUp.getSignupStorenameTxt().sendKeys(Keys.CONTROL,"a",Keys.DELETE);
        postSignUp.getSignupStorenameTxt().sendKeys(devstoreurl);
        postSignUp.getSubmitBtn().click();
        hooks.explicitWait(driver,30,shopifyPartners.getInstallunlistedappLink());
        shopifyPartners.getInstallunlistedappLink().click();
    }






}
