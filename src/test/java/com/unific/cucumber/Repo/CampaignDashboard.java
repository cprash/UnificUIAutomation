package com.unific.cucumber.Repo;

import com.unific.cucumber.Browser;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CampaignDashboard {

    public CampaignDashboard(WebDriver driver){ PageFactory.initElements(driver,this);}


    @FindBy(xpath = "//a[@class='navbar-brand mr-10 css-1d3qkdv e66jy4i0']/img")
    private WebElement unificLogo;

    @FindBy(xpath= "//button[@data-test='new-campaign-button']")
    private WebElement newcampaignBtn;

    @FindBy(xpath = "//a[@class='btn btn-secondary']")
    private WebElement newcampaignLink;

    @FindBy(xpath = ".//*[@id='app']/div/div/div/div/div/div[2]/div[1]/div/table")
    private WebElement orderconfirmationTable;

    @FindAll(@FindBy(xpath=".//*[@id='app']/div/div/div/div/div/div[2]/div[1]/div/table/thead/tr/th"))
    private List<WebElement> campaigndashboardtablerows;

    @FindAll(@FindBy(xpath=".//*[@id='app']/div/div/div/div/div/div[2]/div[1]/div/table/tbody/tr/td[1]/a"))
    private List<WebElement> campaigndashboardtablecols;

    public WebElement getUnificLogo() {
        return unificLogo;
    }

    public WebElement getNewcampaignBtn() {
        return newcampaignBtn;
    }


    public WebElement getNewcampaignLink() {
        return newcampaignLink;
    }

    public WebElement getOrderconfirmationTable() { return orderconfirmationTable; }

    public List<WebElement> getCampaigndashboardtablerows() { return campaigndashboardtablerows; }

    public List<WebElement> getCampaigndashboardtablecols() { return campaigndashboardtablecols; }
}
