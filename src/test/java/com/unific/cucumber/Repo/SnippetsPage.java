package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SnippetsPage {
    public SnippetsPage(WebDriver driver){ PageFactory.initElements(driver,this);}

    @FindBy(xpath = "//a[@data-test='new-Snippet-button']")
    private WebElement NewSnippetsLink;

    @FindBy(id = "name")
    private WebElement SnippetName;

    @FindBy(id = "react-select-2--value")
    private WebElement prefix1List;

    @FindAll(@FindBy(xpath = "//*[starts-with(@id,'react-select-2--option-')]"))
    private List<WebElement> prefix1ListOptions;

    @FindBy(id = "react-select-3--value")
    private WebElement prefix2List;

    @FindBy(xpath = ".//*[@id='react-select-4--value']/div[1]")
    private WebElement RandomCharacters;

    @FindAll(@FindBy(xpath = "//*[starts-with(@id,'react-select-3--option-')]"))
    private List<WebElement> prefix2ListOptions;

    @FindBy(id = "suffix")
    private WebElement suffixTxt;

    @FindBy(className = "text-center badge badge-primary badge-pill")
    private WebElement CouponCodeFormatPreview;

    @FindBy(id = "amount")
    private WebElement DiscountAmtTxt;

    @FindBy(xpath = "//span[contains(text(),'Entire order')]")
    private WebElement entireproductRadio;

    @FindBy(xpath = "//span[contains(text(),'Selected products')]")
    private WebElement selectedproductsRadio;

    @FindBy(xpath = "//span[contains(text(),'Always active')]")
    private WebElement alwaysactiveRadio;

    @FindBy(xpath = "//span[contains(text(),'Date in the future')]")
    private WebElement dateinthefutureRadio;

    @FindBy(xpath = "//span[contains(text(),'Between specific dates')]")
    private WebElement betweenspecificdatesRadio;

    @FindBy(id = "valid_days")
    private WebElement DaysTxt;

    @FindBy(id = "valid_hours")
    private WebElement HoursTxt;

    @FindBy(id = "valid_minutes")
    private WebElement MinutesTxt;

    @FindBy(id = "valid_seconds")
    private WebElement SecondsTxt;

    @FindBy(id = "starts_at")
    private WebElement StartDate;

    @FindBy(id = "ends_at")
    private WebElement EndDate;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-lg' and contains(text(),'Save')]")
    private WebElement SaveBtn;

    @FindBy(id = "react-select-5--value")
    private WebElement DiscountTypeList;

    @FindAll(@FindBy(xpath = "//*[starts-with(@id,'react-select-5--option-')]"))
    private List<WebElement> DiscountTypeListOptions;

    @FindBy(id = "react-select-24--value")
    private WebElement AppliesToSelectList;

    @FindAll(@FindBy(xpath = "//*[starts-with(@id,'react-select-24--option-')]"))
    private WebElement AppliesToSelectListOptions;

    @FindAll(@FindBy(xpath = ".//*[@id='app']/div/div/div/div/div/div[2]/div/table/tbody/tr/td[1]/a"))
    private List<WebElement> snippetstablecols;

    @FindAll(@FindBy(xpath = ".//*[@id='app']/div/div/div/div/div/div[2]/div/table/tbody/tr[1]/td"))
    private List<WebElement> snippetstablerows;

    @FindBy(linkText = "Snippets")
    private WebElement snippetsLink;

    @FindBy(id = "react-select-6--value")
    private WebElement selectedproductsList;

    @FindBy(id = "react-select-6--option-0")
    private WebElement selectedproductsListOptions;

    @FindBy(xpath = "//button[contains(text(),'ok')]")
    private  WebElement okBtn;

    public WebElement getOkBtn() { return okBtn; }

    public WebElement getSelectedproductsList() { return selectedproductsList; }

    public WebElement getSelectedproductsListOptions() { return selectedproductsListOptions; }

    public WebElement getSnippetsLink() { return snippetsLink; }

    public List<WebElement> getSnippetstablerows() { return snippetstablerows; }

    public List<WebElement> getSnippetstablecols() { return snippetstablecols; }

    public WebElement getAppliesToSelectListOptions() { return AppliesToSelectListOptions; }

    public WebElement getAppliesToSelectList() { return AppliesToSelectList; }

    public List<WebElement> getDiscountTypeListOptions() { return DiscountTypeListOptions; }

    public WebElement getDiscountTypeList() { return DiscountTypeList; }

    public WebElement getSaveBtn() { return SaveBtn; }

    public WebElement getEndDate() { return EndDate; }

    public WebElement getStartDate() { return StartDate; }

    public WebElement getDaysTxt() { return DaysTxt; }

    public WebElement getHoursTxt() { return HoursTxt; }

    public WebElement getMinutesTxt() { return MinutesTxt; }

    public WebElement getSecondsTxt() { return SecondsTxt;}

    public WebElement getBetweenspecificdatesRadio() { return betweenspecificdatesRadio; }

    public WebElement getAlwaysactiveRadio() { return alwaysactiveRadio; }

    public WebElement getDateinthefutureRadio() { return dateinthefutureRadio; }

    public WebElement getDiscountAmtTxt() { return DiscountAmtTxt; }

    public WebElement getEntireproductRadio() { return entireproductRadio; }

    public WebElement getSelectedproductsRadio() { return selectedproductsRadio; }

    public WebElement getCouponCodeFormatPreview() { return CouponCodeFormatPreview; }

    public WebElement getSuffixTxt() { return suffixTxt; }

    public WebElement getRandomCharacters() { return RandomCharacters; }

    public WebElement getPrefix1List() { return prefix1List; }

    public WebElement getPrefix2List() { return prefix2List; }

    public List<WebElement> getPrefix1ListOptions() { return prefix1ListOptions; }

    public WebElement getSnippetName() { return SnippetName; }

    public List<WebElement> getPrefix2ListOptions() { return prefix2ListOptions;}

    public WebElement getNewSnippetsLink() { return NewSnippetsLink; }


}
