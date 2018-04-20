package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class PostSignUp {

    public PostSignUp(WebDriver driver){ PageFactory.initElements(driver,this);}

    @FindBy(id = "react-select-2--value")
    private WebElement industryList;

    @FindAll(@FindBy(xpath = "//*[starts-with(@id,'react-select-2--option-')]"))
    private List<WebElement> industryListoptions;

    @FindBy(id = "shop_owner")
    private WebElement fullnameTxt;

    @FindBy(id = "react-select-3--value")
    private WebElement describeyourselfList;

    @FindAll(@FindBy(xpath = "//*[starts-with(@id,'react-select-3--option-')]"))
    private  List<WebElement> describeyourselfListoptions;

    @FindBy(id = "name")
    private WebElement storename;

    @FindBy(id = "address1")
    private WebElement streetaddress;

    @FindBy(id = "city")
    private WebElement city;

    @FindBy(id = "zip")
    private WebElement zip;

    @FindBy(id = "react-select-4--value-item")
    private WebElement country;

    @FindBy(id = "react-select-5--value-item")
    private WebElement state;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement nextBtn;

    @FindBy(linkText = "skip this")
    private WebElement skipBtn;

    @FindBy(linkText = "Start using Unific!")
    private WebElement startusingunificLink;

    @FindBy(name = "store_name")
    private WebElement SignupStorenameTxt;

    @FindBy(id = "submit-step-one-button")
    private WebElement SubmitBtn;

    @FindBy(className = "bigprice")
    private WebElement bigprice;

    public WebElement getBigprice() { return bigprice; }

    public WebElement getNextBtn() { return nextBtn; }

    public WebElement getCity() { return city; }

    public WebElement getCountry() { return country; }

    public WebElement getDescribeyourselfList() { return describeyourselfList; }

    public WebElement getFullnameTxt() { return fullnameTxt; }

    public WebElement getIndustryList() { return industryList; }

    public WebElement getState() { return state; }

    public WebElement getStorename() { return storename; }

    public WebElement getStreetaddress() { return streetaddress; }

    public WebElement getZip() { return zip; }

    public List<WebElement> getDescribeyourselfListoptions() { return describeyourselfListoptions; }

    public List<WebElement> getIndustryListoptions() { return industryListoptions; }

    public WebElement getSkipBtn() { return skipBtn; }

    public WebElement getStartusingunificLink() { return startusingunificLink; }

    public WebElement getSignupStorenameTxt() { return SignupStorenameTxt; }

    public WebElement getSubmitBtn() { return SubmitBtn; }
}
