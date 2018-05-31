package com.unific.cucumber.StepDefs;

import com.unific.cucumber.Browser;
import com.unific.cucumber.Hooks;
import com.unific.cucumber.Repo.CampaignDashboard;
import com.unific.cucumber.Repo.LoginPage;
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



import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Properties;
import java.util.Set;


public class AppInstall {
    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private ShopifyPartners shopifyPartners;
    private PostSignUp postSignUp;
    private CampaignDashboard campaignDashboard;
    private LoginPage loginPage;


    public String devstoreurl;



    public AppInstall(Browser browser){this.browser=browser;}
    Hooks hooks=new Hooks();

    @Given("^User has successfully logged into Shopify Partners$")
    public void user_has_successfully_logged_into_shopify_partners() throws InterruptedException {
        driver=browser.getDriver();
        prop=browser.getProp();
        shopifyPartners=browser.getShopifyPartners();


        driver.get(prop.getProperty("shopifyPartnerUrl"));
        hooks.explicitWait(driver,30,shopifyPartners.getPartnerloginlink());
        shopifyPartners.getPartnerloginlink().click();
        Thread.sleep(6000);
        shopifyPartners=browser.getShopifyPartners();
        try {
            if (shopifyPartners.getContinueBtn().isDisplayed()){
                shopifyPartners.getShopifyEmail().sendKeys(prop.getProperty("shopifyPartnerEmailqa"));
                shopifyPartners.getContinueBtn().click();
                hooks.explicitWait(driver, 30, shopifyPartners.getShopifyPassword());
                shopifyPartners.getShopifyPassword().sendKeys(prop.getProperty("shopifyPartnerPasswordqa"));
                JavascriptExecutor js = (JavascriptExecutor) driver;
                js.executeScript("arguments[0].click();", shopifyPartners.getShopifyloginBtn());
            }
        }
        catch(Exception e){
            shopifyPartners.getShopifyEmail().sendKeys(prop.getProperty("shopifyPartnerEmailqa"));
            hooks.explicitWait(driver, 30, shopifyPartners.getShopifyPassword());
            shopifyPartners.getShopifyPassword().sendKeys(prop.getProperty("shopifyPartnerPasswordqa"));
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].click();", shopifyPartners.getShopifyloginBtn());
        }
    }

    @Given("^User has successfully logged into Shopify Partner$")
    public void user_has_successfully_logged_into_shopify_partner() throws InterruptedException {
        driver=browser.getDriver();
        prop=browser.getProp();
        shopifyPartners=browser.getShopifyPartners();
        driver.get(prop.getProperty("shopifyPartnerUrl"));
        hooks.explicitWait(driver,30,shopifyPartners.getPartnerloginlink());
        shopifyPartners.getPartnerloginlink().click();
        Thread.sleep(6000);
        List<String> emailpwd = hooks.EnvConfig();
        try
        {
            if(shopifyPartners.getContinueBtn().isDisplayed()) {
                shopifyPartners.getShopifyEmail().sendKeys(emailpwd.get(0));
                shopifyPartners.getContinueBtn().click();
                hooks.explicitWait(driver, 30, shopifyPartners.getShopifyPassword());
                shopifyPartners.getShopifyPassword().sendKeys(emailpwd.get(1));

                JavascriptExecutor js = (JavascriptExecutor) driver;
                js.executeScript("arguments[0].click();", shopifyPartners.getShopifyloginBtn());
            }
        }
        catch(Exception e)
        {
            shopifyPartners.getShopifyEmail().sendKeys(emailpwd.get(0));
            hooks.explicitWait(driver, 30, shopifyPartners.getShopifyPassword());
            shopifyPartners.getShopifyPassword().sendKeys(emailpwd.get(1));
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].click();", shopifyPartners.getShopifyloginBtn());
        }
    }



    @When("^User selects Business$")
    public void user_selects_business() throws InterruptedException {

        List<String> str = hooks.EnvConfig();
        Thread.sleep(5000);
        driver.navigate().to(str.get(3));
        }


    @When("^User selects a Business$")
    public void user_selects_a_business()  {
        hooks.explicitWait(driver,30,shopifyPartners.getPartnerApp_Install_Testing());
        shopifyPartners.getPartnerApp_Install_Testing().click();
    }

    @And("^User selects to create a developement store$")
    public void user_selects_to_create_a_development_store() throws InterruptedException {   //hooks.explicitWait(driver,30,shopifyPartners.getCreatestoreLink());

        Thread.sleep(6000);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", shopifyPartners.getCreatestoreLink());
    }

    @And("^User enters Login Information$")
    public void user_enters_login_information(DataTable logininfo)  {
        List<List<String>> data = logininfo.raw();
        hooks.explicitWait(driver,30,shopifyPartners.getStoreName());
        shopifyPartners.getStoreName().sendKeys(data.get(1).get(0));
        shopifyPartners.getPassword().sendKeys(data.get(1).get(1));
        shopifyPartners.getConfirmPassword().sendKeys(data.get(1).get(2));
    }



    @And("^User enters Store Details$")
    public void user_enters_store_details(DataTable storeinfo) throws InterruptedException {
        List<List<String>> data = storeinfo.raw();
        String os = browser.getOs();
        hooks.setAttribute(this.driver,shopifyPartners.getCreatestoreAddress(),"value",data.get(1).get(0));
        hooks.setAttribute(this.driver,shopifyPartners.getCreatestoreCity(),"value",data.get(1).get(1));
        hooks.setAttribute(this.driver,shopifyPartners.getCreatestoreZip(),"value",data.get(1).get(2));

        Select select=new Select(shopifyPartners.getCreatestoreState());
        select.selectByVisibleText(data.get(1).get(3));
        Select select1=new Select(shopifyPartners.getCreatestoreCountry());
        select1.selectByVisibleText(data.get(1).get(4));
    }

    @And("^User saves the store details$")
    public void user_saves_the_store_details() throws InterruptedException {
       shopifyPartners.getCreatestoreSave().click();
       Thread.sleep(10000);
       try{
           if(shopifyPartners.getAlreadySellingList().isDisplayed())
           {
               Select select=new Select(shopifyPartners.getAlreadySellingList());
               select.selectByValue("I sell with a different system");

               hooks.explicitWait(driver,30,shopifyPartners.getSystemusedmostList());

               Select select1=new Select(shopifyPartners.getSystemusedmostList());
               select1.selectByIndex(3);

               Select select2=new Select(shopifyPartners.getCurrentrevenueList());
               select2.selectByValue("$0 (I'm just getting started)");

               shopifyPartners.getCheck().click();
               shopifyPartners.getNextBtn().click();

               hooks.explicitWait(driver,30,shopifyPartners.getFirstName());
               shopifyPartners.getFirstName().sendKeys("Test");
               hooks.explicitWait(driver,30,shopifyPartners.getLasttName());
               shopifyPartners.getLasttName().sendKeys("Test");
               hooks.setAttribute(this.driver,shopifyPartners.getZip(),"value","12345");
               shopifyPartners.getPhonenumber().sendKeys("9988776655");
           }
       }
       catch(Exception e){}

       Thread.sleep(20000);
        try {
            URL url = new URL(driver.getCurrentUrl());


            devstoreurl=url.getHost();

        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    @And("^User navigates to Apps in the concerned business$")
    public void user_navigates_to_apps_for_business() throws InterruptedException {
        String environment = prop.getProperty("Environment");
        if(environment.equalsIgnoreCase("prod")) {
            shopifyPartners.getAppsLink().click();
        }
        else {
        driver.navigate().to(prop.getProperty("shopifyPartnerUrl"));
        shopifyPartners.getPartnerloginlink().click();
        Thread.sleep(6000);
        List<String> str = hooks.EnvConfig();
        driver.navigate().to(str.get(3));
        Thread.sleep(6000);
        shopifyPartners.getAppsLink().click();
        Thread.sleep(6000);
        }
    }

    @And("^User is able to Create App Store Listing or install app from appstore$")
    public void user_is_able_to_create_app_store_listing() throws InterruptedException {
        String environment = prop.getProperty("Environment");
        String os = browser.getOs();

        if(environment.equalsIgnoreCase("prod"))
        {   Thread.sleep(6000);
            //hooks.explicitWait(driver,30,shopifyPartners.getVisitAppstoreLink());
            String handle = driver.getWindowHandle();
            //System.out.println(handle);
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].click();", shopifyPartners.getVisitAppstoreLink());
            Set<String> handles = driver.getWindowHandles();
            handles.remove(handle);
            String window = handles.iterator().next();
            //System.out.println(window);
            driver.switchTo().window(window);
            hooks.explicitWait(driver,30,shopifyPartners.getShopifystoreSearch());
            Thread.sleep(5000);
            shopifyPartners.getShopifystoreSearch().sendKeys("unific",Keys.ENTER);
            Thread.sleep(5000);
            hooks.explicitWait(driver,30,shopifyPartners.getUnificProdAppLink());
            shopifyPartners.getUnificProdAppLink().click();
            hooks.explicitWait(driver,30,shopifyPartners.getGetLink());
            shopifyPartners.getGetLink().click();

        }
        else {
            if (environment.equalsIgnoreCase("qa"))
                shopifyPartners.getUnificqaLink().click();
            else if (environment.equalsIgnoreCase("dev"))
                shopifyPartners.getUnificdevLink().click();
            else if (environment.equalsIgnoreCase("stage"))
                shopifyPartners.getUnificstagingLink().click();
            hooks.explicitWait(driver,30,shopifyPartners.getCreateappstorelistingLink());
            shopifyPartners.getCreateappstorelistingLink().click();
            hooks.explicitWait(driver,30,shopifyPartners.getEditappsubmissionformLink());
            shopifyPartners.getEditappsubmissionformLink().click();
            String handle = driver.getWindowHandle();
            //System.out.println(handle);
            hooks.explicitWait(driver, 30, shopifyPartners.getViewapplistingLink());
            shopifyPartners.getViewapplistingLink().click();
            Thread.sleep(6000);
            Set<String> handles = driver.getWindowHandles();
            handles.remove(handle);
            String window = handles.iterator().next();
            //System.out.println(window);
            driver.switchTo().window(window);
            hooks.explicitWait(driver, 30, shopifyPartners.getGetLink());
            shopifyPartners.getGetLink().click();
            hooks.explicitWait(driver, 30, shopifyPartners.getLoginSubmit());
            hooks.setAttribute(this.driver,shopifyPartners.getStoreURLtxt(),"value",devstoreurl);
            Thread.sleep(5000);
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].click();", shopifyPartners.getLoginSubmit());

        }
    }

    @And("^User installs the unlisted or listed App$")
    public void user_installs_the_unlisted_app() throws InterruptedException {
        prop=browser.getProp();
        String env=prop.getProperty("Environment");
        Thread.sleep(10000);
        if(env.equalsIgnoreCase("prod"))
        {
            hooks.explicitWait(driver,30,shopifyPartners.getInstalllistedappLink());
            shopifyPartners.getInstalllistedappLink().click();
        }
          else {
            hooks.explicitWait(driver, 30, shopifyPartners.getInstallunlistedappLink());
            shopifyPartners.getInstallunlistedappLink().click();
        }
    }

    @Then("^User selects mandatory fields and also verifies pre filled information$")
    public void user_enters_company_information_and_also_verifies_pre_filled_information(DataTable storeinfo) throws InterruptedException {
        List<List<String>> data = storeinfo.raw();
        postSignUp =browser.getPostSignUp();
        hooks.explicitWait(driver,100, postSignUp.getIndustryList());
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


    @And("^User skips connection to Facebook and Starts using Unific$")
    public void user_skips_connection_to_facebook_and_starts_using_unific()  {
        hooks.explicitWait(driver,10, postSignUp.getSkipBtn());
        postSignUp.getSkipBtn().click();
        hooks.explicitWait(driver,30, postSignUp.getStartusingunificLink());
        postSignUp.getStartusingunificLink().click();
        System.out.println("StoreURl: "+devstoreurl);
        System.out.println("UnificLoginEmail : "+Login.unificloginemail);
        System.out.println("UnificLoginPassword : "+Login.str3);
    }

//    @Then("^DevStore is created with a Store URL$")
//    public void devstore_is_created_with_a_store_url()  {
//         //hooks.explicitWait(driver,30,shopifyPartners.getDevstoreURL());
//         //devstoreurl = shopifyPartners.getDevstoreURL().getText();
//    }


    @And("^User submits the Store URL at unific and installs the Unlisted App$")
    public void user_submits_the_store_url_at_unific_and_installs_the_unlisted_app() {
        driver=browser.getDriver();
        postSignUp=browser.getPostSignUp();
        String os = browser.getOs();
        prop=browser.getProp();
        String Env=prop.getProperty("Environment");
        hooks.explicitWait(driver,30,postSignUp.getSignupStorenameTxt());
        hooks.setAttribute(this.driver,postSignUp.getSignupStorenameTxt(),"value",devstoreurl);
        if(os.equalsIgnoreCase("linux") || os.startsWith("Windows"))
        hooks.explicitWait(driver,30,postSignUp.getSubmitBtn());
        postSignUp.getSubmitBtn().click();

        if(Env.equalsIgnoreCase("prod")) {
            hooks.explicitWait(driver, 100, shopifyPartners.getInstalllistedappLink());
            shopifyPartners.getInstalllistedappLink().click();
        }
            else {
            hooks.explicitWait(driver, 100, shopifyPartners.getInstallunlistedappLink());
            shopifyPartners.getInstallunlistedappLink().click();
        }

    }

    @And("^User verifies pre filled information$")
    public void user_verifies_pre_filled_information(DataTable info) throws InterruptedException {
        List<List<String>> data = info.raw();
        postSignUp =browser.getPostSignUp();
        Thread.sleep(10000);
        hooks.explicitWait(driver,100,postSignUp.getStreetaddress());
        Assert.assertEquals(data.get(1).get(0), postSignUp.getStreetaddress().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(1), postSignUp.getCity().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(2), postSignUp.getZip().getAttribute("value"));
        Assert.assertEquals(data.get(1).get(3), postSignUp.getBillingaddressstate().getText());
        Assert.assertEquals(data.get(1).get(4), postSignUp.getBillingaddresscoountry().getText());


    }

    @And("^User validates Big Price and enters Credit Card Details$")
    public void user_validates_big_price_and_enters_credit_card_details(DataTable info) {
        List<List<String>> data = info.raw();
        hooks.explicitWait(driver,30,postSignUp.getBigprice());
        Assert.assertEquals(data.get(1).get(0), postSignUp.getBigprice().getText());
        driver.switchTo().frame("__privateStripeFrame4");
        hooks.explicitWait(driver,30,postSignUp.getCardnumber());
        postSignUp.getCardnumber().sendKeys((data.get(1).get(1)));
        driver.switchTo().defaultContent();
        driver.switchTo().frame("__privateStripeFrame5");
        hooks.explicitWait(driver,30,postSignUp.getPostal());
        postSignUp.getPostal().sendKeys(data.get(1).get(2));
        driver.switchTo().defaultContent();
        driver.switchTo().frame("__privateStripeFrame6");
        hooks.explicitWait(driver,30,postSignUp.getExpdate());
        postSignUp.getExpdate().sendKeys(data.get(1).get(3));
        driver.switchTo().defaultContent();
        driver.switchTo().frame("__privateStripeFrame7");
        hooks.explicitWait(driver,30,postSignUp.getCvc());
        postSignUp.getCvc().sendKeys(data.get(1).get(4));
        driver.switchTo().defaultContent();

    }

    @And("^User validates Big Price$")
    public void user_validates_big_price(DataTable info) throws InterruptedException {
        postSignUp=browser.getPostSignUp();
        driver=browser.getDriver();
        List<List<String>> data = info.raw();
        Thread.sleep(5000);
        hooks.explicitWait(driver,100,postSignUp.getBigprice());
        Assert.assertEquals(data.get(1).get(0), postSignUp.getBigprice().getText());

    }

    @And("^User selects to Join$")
    public void user_selects_to_join()
    {
        postSignUp.getJoinBtn().click();
    }

    @And("^User selects Join$")
    public void user_selects_join() {
      hooks.explicitWait(driver,30,postSignUp.getJoinLink());
      postSignUp.getJoinLink().click();
    }

    @And("^Default Order Confirmation Campaign and Default Abandoned Cart Campaign should be preinstalled$")
    public void default_order_confirmation_campaign_and_default_abandoned_cart_campaign_should_be_preinstalled() throws InterruptedException {
        Thread.sleep(5000);
        campaignDashboard= browser.getCampaignDashboard();
        this.campaignDashboard.getDefaultorderconfirmationcampaignLink().isDisplayed();
        this.campaignDashboard.getDefaultabandonedcartLink().isDisplayed();

    }

    @And("^User validates that the landing page is unific signup$")
    public void user_validates_that_the_landing_page_is_unific_signup() throws InterruptedException {
        loginPage=browser.getLoginPage();
        Thread.sleep(20000);
        hooks.explicitWait(driver,300,loginPage.getSignupBtn());
        String URL = driver.getCurrentUrl();
        List<String> info = hooks.EnvConfig();
        Assert.assertEquals(URL, info.get(2) + "/signup");


    }

    @And("^User selects to Approve charges$")
    public void user_selects_to_approve_charges()  {
        hooks.explicitWait(driver,30,shopifyPartners.getApproveChagesBtn());
        shopifyPartners.getApproveChagesBtn().click();

    }

}
