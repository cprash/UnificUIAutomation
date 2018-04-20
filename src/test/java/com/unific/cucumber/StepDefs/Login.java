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

import java.util.List;
import java.util.Properties;


public class Login {

    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private LoginPage loginPage;
    private CampaignDashboard campaignDashboard;

    public int count=0;
    public static String unificloginemail;
    public static String str3;

    public Login (Browser browser) { this.browser=browser; }


    Hooks hooks = new Hooks();

    @Given("^User is at Unific Login Page$")
    public void user_is_at_unific_login_page()  {
        driver=browser.getDriver();
        prop=browser.getProp();
        loginPage=browser.getLoginPage();
        driver.get(prop.getProperty("URL"));



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
        driver=browser.getDriver();
        loginPage=browser.getLoginPage();
        hooks.explicitWait(driver,100,loginPage.getSignupBtn());
        loginPage.getAgreeTnC().click();

        try{
            do {
                loginPage.getEmailText().sendKeys(Keys.CONTROL,"a",Keys.DELETE);
                Thread.sleep(2000);
                loginPage.getEmailText().sendKeys(str1+count+str2);
                loginPage.getPasswordText().sendKeys(Keys.CONTROL,"a",Keys.DELETE);
                loginPage.getPasswordText().sendKeys(str3);
                unificloginemail=loginPage.getEmailText().getAttribute("value");
                loginPage.getSignupBtn().click();
                count++;
                Thread.sleep(2000);
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
        prop=browser.getProp();
        driver.navigate().to(prop.getProperty("URL"));
        hooks.explicitWait(driver,3000000,loginPage.getSignupLink());
        loginPage.getSignupLink().click();
    }




}
