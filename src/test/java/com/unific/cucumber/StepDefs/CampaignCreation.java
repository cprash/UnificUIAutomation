package com.unific.cucumber.StepDefs;

import com.unific.cucumber.Browser;
import com.unific.cucumber.Hooks;
import com.unific.cucumber.Repo.CampaignCreate;
import com.unific.cucumber.Repo.CampaignDashboard;
import com.unific.cucumber.Repo.LeftNavMenu;
import com.unific.cucumber.Repo.TemplateEditorPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.text.SimpleDateFormat;
import java.util.Properties;
import java.util.*;

public class CampaignCreation {

    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private CampaignDashboard campaignDashboard;
    private CampaignCreate campaignCreate;
    private LeftNavMenu leftNavMenu;
    private TemplateEditorPage templateEditorPage;
    public String strArg2;

    public CampaignCreation (Browser browser) { this.browser=browser; }

    Hooks hooks = new Hooks();

    @When("^User clicks on Newcampaign$")
    public void user_clicks_on_Newcampaign() throws InterruptedException {
        driver=browser.getDriver();
        prop=browser.getProp();
        Thread.sleep(10000);
        campaignDashboard=browser.getCampaignDashboard();
        hooks.explicitWait(driver,30,campaignDashboard.getNewcampaignBtn());
        campaignDashboard.getNewcampaignBtn().click();
    }

    @And("^User clicks on Create new campaign from scratch$")
    public void user_clicks_on_Create_new_campaign_from_scratch() {
        hooks.explicitWait(driver,30,campaignDashboard.getNewcampaignBtn());
        campaignDashboard.getNewcampaignLink().click();
    }

    @Then("^User is navigated to CampaignCreation Page$")
    public void user_is_naviagated_to_CampaignCreation_Page()  {
        driver=browser.getDriver();
        prop=browser.getProp();
        campaignCreate=browser.getCampaignCreate();
        hooks.explicitWait(driver,30,campaignCreate.getCampaigntitleTxt());
        campaignCreate.getCampaigntitleTxt().isDisplayed();

    }

    @When("^User enters Campaign title as \"([^\"]*)\"$")
    public void user_enters_campaign_title_as_something(String strArg1)  {

        String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
        strArg1=strArg1.concat(timeStamp);
        strArg2=strArg1;
        campaignCreate.getCampaigntitleTxt().sendKeys(strArg1);
    }

    @And("^User selects Starting Trigger as \"([^\"]*)\"$")
    public void user_selects_starting_trigger_as_something(String strArg1) throws InterruptedException {


        campaignCreate.getStartingtriggerLink().click();
        hooks.explicitWait(driver,30,campaignCreate.getNextBtn());
        if (strArg1.equals("Order Confirmation Event"))
            campaignCreate.getOrderconfirmationLink().click();

        else if (strArg1.equals("Abandoned Cart Event"))
            campaignCreate.getAbandonedcartLink().click();

        else if (strArg1.equals("Order Create"))
            campaignCreate.getOrdercreateLink().click();

        else if (strArg1.equals("Order Paid"))
            campaignCreate.getOrderpaidLink().click();

        else if (strArg1.equals("Order Fulfilled"))
            campaignCreate.getOrderfulfilledLink().click();

        else if (strArg1.equals("Order Partially Fulfilled "))
            campaignCreate.getPartiallyfulfilledLink().click();

        campaignCreate.getNextBtn().click();
        hooks.explicitWait(driver,30,campaignCreate.getSaveBtn());
        campaignCreate.getSaveBtn().click();
        Thread.sleep(10000);
    }

    @And("^User selects Action as \"([^\"]*)\"$")
    public void user_selects_action_as_something(String strArg1) {
        campaignCreate.getSelectanactionLink().click();
                //if(campaignCreate.getSelectanactionLink().isDisplayed())
          //  campaignCreate.getSelectanactionLink().click();
        //else if (campaignCreate.getSelectaction1Link().isDisplayed())
         //   campaignCreate.getSelectaction1Link().click();
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //js.executeScript("arguments[0].click();", campaignCreate.getSelectanactionLink());

        if(strArg1.equals("Send Email"))
        campaignCreate.getSendEmailLink().click();
        hooks.explicitWait(driver,30,campaignCreate.getNextBtn());
        campaignCreate.getNextBtn().click();
    }

    @And("^User enters Subject Line as \"([^\"]*)\" and Pre header as \"([^\"]*)\"$")
    public void user_enters_subject_line_as_something_and_pre_header_as_something(String strArg1, String strArg2) throws InterruptedException {
        campaignCreate.getSubjectLineTxt().sendKeys(strArg1);
        campaignCreate.getPreHeaderTxt().sendKeys(strArg2);

    }

    @And("^User enters an End Goal as \"([^\"]*)\"$")
    public void user_enters_an_end_goal_as_something(String strArg1) throws InterruptedException {

        campaignCreate.getEndgoalLink().click();
        if(strArg1.equals("Order Created"))
            campaignCreate.getOrdercreategoalLink().click();

        campaignCreate.getNextBtn().click();
        hooks.explicitWait(driver,30,campaignCreate.getSaveBtn());
        campaignCreate.getSaveBtn().click();
        Thread.sleep(10000);

    }

    @And("^User clicks on Publish$")
    public void user_clicks_on_publish() throws InterruptedException {
        hooks.explicitWait(driver,30,campaignCreate.getPublishLink());
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //js.executeScript("arguments[0].scrollIntoView();", campaignCreate.getPublishLink());
        campaignCreate.getPublishLink().click();
        Thread.sleep(10000);
        campaignCreate.getPublishCheck().isDisplayed();
        Thread.sleep(10000);
        campaignCreate.getCancelLink().click();
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //js.executeScript("arguments[0].click();", campaignCreate.getCancelLink());
    }

    @Then("^User is able to see the Campaign in the Dashboard as Published$")
    public void user_is_able_to_see_the_campaign_in_the_dashboard_as_published() throws InterruptedException {
        Thread.sleep(10000);
        driver=browser.getDriver();
        int check=1;

        List<WebElement> list=campaignDashboard.getCampaigndashboardtablecols();
        int cols=list.size();

        List<WebElement> list1=campaignDashboard.getCampaigndashboardtablecols();
        int rows=list1.size();


        for (WebElement ele:list1) {
            //System.out.print(ele.getText());
            if(strArg2.equals(ele.getText())) {
                WebElement ele1=driver.findElement(By.xpath(".//*[@id='app']/div/div/div/div/div/div[2]/div[1]/div/table/tbody/tr["+check+"]/td[2]/span"));
                Assert.assertEquals("PUBLISHED",ele1.getText());
                break;

            }
            else check++;

        }
    }

    @When("^User clicks on campaigns$")
    public void user_clicks_on_campaings() throws Throwable {
        driver=browser.getDriver();
        leftNavMenu=browser.getLeftNavMenu();
        leftNavMenu.getCampaignsLink().click();
    }

    @And("^User edits Email$")
    public void user_edits_email() throws InterruptedException {
        driver=browser.getDriver();
        campaignCreate=browser.getCampaignCreate();
        templateEditorPage=browser.getTemplateEditorPage();
        hooks.explicitWait(driver,30,campaignCreate.getEditEmailLink());
        campaignCreate.getEditEmailLink().click();
        hooks.explicitWait(driver,80,templateEditorPage.getEcommerceSnippetLink());


    }



}
