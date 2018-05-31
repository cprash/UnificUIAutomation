package com.unific.cucumber.StepDefs;

import com.unific.cucumber.Browser;
import com.unific.cucumber.Hooks;
import com.unific.cucumber.Repo.LeftNavMenu;
import com.unific.cucumber.Repo.SnippetsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Properties;

public class Snippets {
    private WebDriver driver;
    private Properties prop;
    private Browser browser;
    private LeftNavMenu leftNavMenu;
    private SnippetsPage snippetsPage;

    public static String str1;

    public Snippets (Browser browser) { this.browser=browser; }


    Hooks hooks = new Hooks();

    @Then("^User is able to see the generated Coupon$")
    public void user_is_able_to_see_the_generated_coupon() {
        leftNavMenu.getSnippetsLink().click();
        hooks.explicitWait(driver,30,snippetsPage.getSnippetsLink());
        List<WebElement> list1 = snippetsPage.getSnippetstablecols();
        int cols=list1.size();
        List<WebElement> list2 = snippetsPage.getSnippetstablerows();
        int rows=list2.size();
        int check=1;
        for(WebElement ele:list1){
        if(str1.equalsIgnoreCase(ele.getText()))
            {   System.out.println("1234");
                WebElement ele1=driver.findElement(By.xpath(".//*[@id='app']/div/div/div/div/div/div[2]/div/table/tbody/tr["+check+"]/td[2]/span"));
                Assert.assertEquals("ACTIVE",ele1.getText());
                break;
            }
            else check++;
        }
    }

    @And("^User can inactivate the coupon$")
    public void user_can_inactivate_the_coupon() throws InterruptedException {
        List<WebElement> list1 = snippetsPage.getSnippetstablecols();
        int cols=list1.size();
        List<WebElement> list2 = snippetsPage.getSnippetstablerows();
        int rows=list2.size();
        int check=1;
        for(WebElement ele:list1){
            if(str1.equalsIgnoreCase(ele.getText()))
            {   System.out.println("234");
                WebElement ele3=driver.findElement(By.xpath(".//*[@id='app']/div/div/div/div/div/div[2]/div/table/tbody/tr["+check+"]/td[2]/span"));
                WebElement ele1=driver.findElement(By.xpath(".//*[@id='app']/div/div/div/div/div/div[2]/div/table/tbody/tr["+check+"]/td[6]/div/button"));
                ele1.click();
                WebElement ele2=driver.findElement(By.xpath(".//*[@id='app']/div/div/div/div/div/div[2]/div/table/tbody/tr["+check+"]/td[6]/div/div/button/a/span"));
                Thread.sleep(3000);
                Actions b = new Actions(driver).moveToElement(ele2).click();
                b.build().perform();
                //JavascriptExecutor js = (JavascriptExecutor) driver;
                //js.executeScript("arguement[0].click()",ele2);
                Thread.sleep(3000);
                snippetsPage.getOkBtn().click();
                Thread.sleep(4000);
                Assert.assertEquals("INACTIVE",ele3.getText());
                break;
            }
            else check++;
        }

    }

    @And("^User is able to navigate to Snippets Page$")
    public void user_is_able_to_navigate_to_snippets_page() {
        driver=browser.getDriver();
        leftNavMenu=browser.getLeftNavMenu();
        hooks.explicitWait(driver,100,leftNavMenu.getSnippetsLink());
        hooks.click(this.driver,leftNavMenu.getSnippetsLink());

    }

    @And("^User selects to create a new Snippet$")
    public void user_selects_to_create_a_new_snippet()  {
        snippetsPage=browser.getSnippetsPage();
        hooks.explicitWait(driver,100,snippetsPage.getNewSnippetsLink());
        hooks.click(this.driver,snippetsPage.getNewSnippetsLink());
    }

    @And("^User enters Snippet Name as \"([^\"]*)\"$")
    public void user_enters_snippet_name_as_something(String strArg1) {
        String timestamp=new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
        hooks.explicitWait(driver,100,snippetsPage.getSnippetName());
        String str=strArg1.concat(timestamp);
        snippetsPage.getSnippetName().sendKeys(str);
        str1=str;

    }

    @And("^User selects Coupon Code Format with Prefix1 as \"([^\"]*)\" Prefix2 as \"([^\"]*)\" and Suffix as \"([^\"]*)\"$")
    public void user_selects_coupon_code_format_with_prefix1_as_something_prefix2_as_something_and_suffix_as_something(String strArg1, String strArg2, String strArg3) throws InterruptedException {
        hooks.explicitWait(driver,100,snippetsPage.getPrefix1List());
        if(strArg2.isEmpty()) {
            snippetsPage.getPrefix1List().click();
            Thread.sleep(3000);
            List<WebElement> prefix1ListOptions = snippetsPage.getPrefix1ListOptions();
            for (WebElement element : prefix1ListOptions) {
                if (element.getText().equalsIgnoreCase(strArg1)) {
                    element.click();
                    break;
                }
            }
        }
        if(strArg1.isEmpty()) {
            snippetsPage.getPrefix2List().click();
            Thread.sleep(3000);
            List<WebElement> prefix2ListOptions = snippetsPage.getPrefix2ListOptions();
            for (WebElement element1 : prefix2ListOptions) {
                if (element1.getText().equalsIgnoreCase(strArg2)) {
                    element1.click();
                    break;
                }
            }
        }
        snippetsPage.getSuffixTxt().sendKeys(strArg3);

    }

    @And("^User selects Discount Type as \"([^\"]*)\" and Discount value as \"([^\"]*)\"$")
    public void user_selects_discount_type_as_something_and_discount_value_as_something(String strArg1, String strArg2) throws InterruptedException {
        hooks.explicitWait(driver,100,snippetsPage.getDiscountTypeList());
        snippetsPage.getDiscountTypeList().click();
        Thread.sleep(3000);
        List<WebElement> discountTypeListOptions = snippetsPage.getDiscountTypeListOptions();
        if(strArg1.equalsIgnoreCase("Free Shipping")){
            for (WebElement element1 : discountTypeListOptions) {
                if (element1.getText().equalsIgnoreCase(strArg1)) {
                    element1.click();
                    break;
                }
            }

        }
        else
        {
            for (WebElement element2 : discountTypeListOptions) {
                if (element2.getText().equalsIgnoreCase(strArg1)) {
                    element2.click();
                    break;
                }
            }
            snippetsPage.getDiscountAmtTxt().sendKeys(strArg2);
        }
    }

    @And("^User selects applies to as \"([^\"]*)\"$")
    public void user_selects_applies_to_as_something(String strArg1) throws InterruptedException {
        if (strArg1.equalsIgnoreCase("Entire order"))
            snippetsPage.getEntireproductRadio().click();
        else if(strArg1.equalsIgnoreCase("Selected products"))
        {
            snippetsPage.getSelectedproductsRadio().click();
            snippetsPage.getSelectedproductsList();
            snippetsPage.getSelectedproductsList().click();
            hooks.explicitWait(driver,30,snippetsPage.getSelectedproductsListOptions());
            snippetsPage.getSelectedproductsListOptions().click();
        }
    }

    @And("^User selects active dates as \"([^\"]*)\"$")
    public void user_selects_active_dates_as_something(String strArg1) throws InterruptedException {

        if(strArg1.equalsIgnoreCase("Always active"))
            snippetsPage.getAlwaysactiveRadio().click();
        else if(strArg1.equalsIgnoreCase("Date in the future")) {
            snippetsPage.getDateinthefutureRadio().click();
            hooks.explicitWait(driver,30,snippetsPage.getDaysTxt());
            snippetsPage.getDaysTxt().sendKeys("10");
            snippetsPage.getHoursTxt().sendKeys("10");
            snippetsPage.getMinutesTxt().sendKeys("10");
            snippetsPage.getSecondsTxt().sendKeys("10");
        }
        else if (strArg1.equalsIgnoreCase("Between specific dates")) {
            snippetsPage.getBetweenspecificdatesRadio().click();
            hooks.explicitWait(driver,30,snippetsPage.getStartDate());
            snippetsPage.getStartDate().sendKeys("05/12/2018");
            snippetsPage.getEndDate().sendKeys("12/12/2019");
        }
        else
            snippetsPage.getAlwaysactiveRadio().click();
    }

    @And("^User selects to save$")
    public void user_selects_to_save() throws InterruptedException {

            hooks.click(this.driver,snippetsPage.getSaveBtn());
            Thread.sleep(5000);
    }



}
