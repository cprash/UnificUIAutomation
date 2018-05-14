package com.unific.cucumber.StepDefs;

import com.unific.cucumber.Browser;
import com.unific.cucumber.Hooks;
import com.unific.cucumber.Repo.CampaignDashboard;
import com.unific.cucumber.Repo.LoginPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Properties;


public class Login {

    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private LoginPage loginPage;
    private CampaignDashboard campaignDashboard;

    public int count;
    public static String unificloginemail;
    public static String str3;

    public Login (Browser browser) { this.browser=browser; }


    Hooks hooks = new Hooks();

    @Given("^User is at Unific Login Page$")
    public void user_is_at_unific_login_page()  {
        driver=browser.getDriver();
        prop=browser.getProp();
        loginPage=browser.getLoginPage();
        String URL = hooks.environment();
        driver.get(URL);



    }

    @When("^User Enters valid Email and Password$")
    public void user_enters_valid_email_and_password()  {
        hooks.explicitWait(driver,30,loginPage.getEmailText());
        loginPage.getEmailText().sendKeys(prop.getProperty("loginEmail"));
        loginPage.getPasswordText().sendKeys(prop.getProperty("loginPassword"));
    }

    @And("^User Clicks on Login$")
    public void user_clicks_on_login()  {
        loginPage.getLoginButton().click();


    }

    @Then("^User is successfully Logged In$")
    public void user_is_successfully_logged_in()  {
        campaignDashboard=browser.getCampaignDashboard();
        hooks.explicitWait(driver,20,campaignDashboard.getUnificLogo());
        campaignDashboard.getUnificLogo().isDisplayed();

    }

    @When("^User Enters invalid Email and Password$")
    public void user_Enters_invalid_Email_and_Password()  {
        hooks.explicitWait(driver,20,loginPage.getEmailText());
        loginPage.getEmailText().sendKeys("abc@gmail.com");
        loginPage.getPasswordText().sendKeys("test");
    }

    @Then("^User sees Validation message \"([^\"]*)\"$")
    public void user_sees_validation_message_something(String strArg1)  {
        hooks.explicitWait(driver,20,loginPage.getInvalidloginMessage());
        String actual=loginPage.getInvalidloginMessage().getText();
        Assert.assertEquals(strArg1,actual);
    }

    @And("^User signups at unific$")
    public void user_signups_at_unific(DataTable signupinfo) throws InterruptedException
    {
        List<List<String>> data = signupinfo.raw();
        String str1= data.get(1).get(0);
        String str2 = data.get(1).get(1);
        str3 = data.get(1).get(2);
        String str4=null;
        driver=browser.getDriver();
        loginPage=browser.getLoginPage();
        hooks.explicitWait(driver,100,loginPage.getSignupBtn());
        loginPage.getAgreeTnC().click();
        String os = browser.getOs();
        prop=browser.getProp();
        String env=prop.getProperty("Environment");
        String timeStamp = new SimpleDateFormat("yyMMddHHmmssZ").format(new Date());
        if(env.equalsIgnoreCase("qa"))
            str4="qa";
        else if(env.equalsIgnoreCase("dev"))
            str4="dev";
        else if(env.equalsIgnoreCase("stage"))
            str4="stage";
        else if(env.equalsIgnoreCase("prod"))
            str4="prod";

        try{
            do {
                if(os.equalsIgnoreCase("linux") || os.startsWith("Windows"))
                loginPage.getEmailText().sendKeys(Keys.CONTROL,"a",Keys.DELETE);
                else if(os.startsWith("mac"))
                    loginPage.getEmailText().clear();
                //loginPage.getEmailText().sendKeys(Keys.COMMAND,"a",Keys.DELETE);
                Thread.sleep(2000);
                loginPage.getEmailText().sendKeys(str1+str4+timeStamp+str2);
                if(os.equalsIgnoreCase("linux") || os.startsWith("Windows"))
                    loginPage.getPasswordText().sendKeys(Keys.CONTROL,"a",Keys.DELETE);
                else if(os.startsWith("mac"))
                    loginPage.getPasswordText().clear();
                    //loginPage.getPasswordText().sendKeys(Keys.COMMAND,"a",Keys.DELETE);


                loginPage.getPasswordText().sendKeys(str3);
                unificloginemail=loginPage.getEmailText().getAttribute("value");
                loginPage.getSignupBtn().click();
                count++;
                Thread.sleep(5000);
            }while(loginPage.getUserexistsMsg().isDisplayed());
        }
        catch (Exception e){
            Thread.sleep(10000);
        }
    }

    @When("^User navigates to unific sign up$")
    public void user_navigates_to_unific_sign_up() throws InterruptedException {
        driver=browser.getDriver();
        loginPage=browser.getLoginPage();
        String str = hooks.environment();
        driver.navigate().to(str);
        hooks.explicitWait(driver,300,loginPage.getSignupLink());
        loginPage.getSignupLink().click();
    }




}
