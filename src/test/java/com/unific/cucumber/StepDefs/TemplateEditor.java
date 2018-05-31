package com.unific.cucumber.StepDefs;

import com.unific.cucumber.Browser;
import com.unific.cucumber.Hooks;
import com.unific.cucumber.Repo.LeftNavMenu;
import com.unific.cucumber.Repo.SnippetsPage;
import com.unific.cucumber.Repo.TemplateEditorPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Properties;

public class TemplateEditor {
    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private TemplateEditorPage templateEditorPage;

    public TemplateEditor (Browser browser) { this.browser=browser; }

    Hooks hooks = new Hooks();

    @And("^User is able to see the Active Coupon$")
    public void user_is_able_to_see_the_active_coupon() {
        driver=browser.getDriver();
        templateEditorPage=browser.getTemplateEditorPage();
        hooks.explicitWait(driver,30,templateEditorPage.getCouponSnippetsLink());
        templateEditorPage.getCouponSnippetsLink().click();
        String coupon=null;
        List<WebElement> couponList = templateEditorPage.getCouponList();
        for(WebElement ele : couponList )
        {
            if(driver.findElement(By.xpath("//div[starts-with(@class,'text-center align-items-center d-flex justify-content-center ')]/div/div[starts-with(text(),'Coupon: "+Snippets.str1+"')]")).isDisplayed()) {
                coupon = ele.getText();
                Assert.assertEquals("Coupon: " + Snippets.str1, coupon);
            }
        }
    }

    @Then("^User is able to validate the blocks on Template Canvas$")
    public void user_is_able_to_validate_the_blocks_on_template_canvas()  {

    }

    @And("^User clears Template$")
    public void user_clears_template()  {
        driver=browser.getDriver();
        templateEditorPage=browser.getTemplateEditorPage();
        templateEditorPage.getClearTemplate().click();
    }

    @And("^User drags Standard blocks on the Template Canvas$")
    public void user_drags_standard_blocks_on_the_template_canvas() throws InterruptedException {
        templateEditorPage.getStandardBlockLink().click();
        Thread.sleep(3000);
        List<WebElement> standardBlocks = templateEditorPage.getStandardBlocks();
        hooks.explicitWait(driver,30,templateEditorPage.getTextBlock());
        Hooks.dragandDrop(driver,templateEditorPage.getTextBlock(),templateEditorPage.getTemplatecanvas());
        //for(WebElement element:standardBlocks){

        //    Hooks.dragandDrop(this.driver,element,templateEditorPage.getTemplatecanvas());

        //}
        Thread.sleep(10000);

    }
    }