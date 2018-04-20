package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShopifyPartners {

    public ShopifyPartners(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//a[contains(text(),'Partner login ') and @class='marketing-nav__item marketing-nav__item--user']")
    private WebElement partnerloginlink;

    @FindBy(id = "account_email")
    private WebElement shopifyEmail;

    @FindBy(id = "account_password")
    private WebElement shopifyPassword;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement shopifyloginBtn;

    @FindBy(xpath = "//span[contains(text(),'App_Install_Testing')]")
    private WebElement partnerApp_Install_Testing;

    @FindBy(id = "signup_shop_name")
    private WebElement storeName;

    @FindBy(id = "signup_password")
    private WebElement password;

    @FindBy(id = "confirm_password")
    private WebElement confirmPassword;

    @FindBy(linkText = "Create store")
    private WebElement createstoreLink;

    @FindBy(id = "signup_address1")
    private WebElement createstoreAddress;

    @FindBy(id = "signup_city")
    private WebElement createstoreCity;

    @FindBy(id = "signup_zip")
    private WebElement createstoreZip;

    @FindBy(id = "signup_province")
    private WebElement createstoreState;

    @FindBy(id = "signup_country")
    private WebElement createstoreCountry;

    @FindBy(xpath = "//button[contains(text(),'Save')]")
    private WebElement createstoreSave;

    @FindBy(xpath = "//button[@id='ui-popover-activator--1']")
    private WebElement shopifypartnerprofileLink;

    @FindBy(xpath = "//span[contains(text(),'Integrations')]")
    private WebElement integrationsLink;

    @FindBy(xpath = "//span[contains(text(),'Apps')]")
    private WebElement AppsLink;

    @FindBy(linkText = "unific-qa")
    private WebElement unificqaLink;

    @FindBy(xpath = "//a[contains(text(),'Create App Store listing') and @class='ui-button ui-button--transparent action-bar__link']")
    private WebElement createappstorelistingLink;

    @FindBy(xpath = "//div[@class='app-submissions__section']/a[@href='/services/shopify_applications/new']")
    private WebElement editappsubmissionformLink;

    @FindBy(linkText = "View app listing")
    private WebElement viewapplistingLink;

    @FindBy(xpath = "//div[@id='AppInfo']/a")
    private WebElement getLink;

    @FindBy(xpath = "//table[@class='ui-data-table ui-data-table--scroll']/tbody/tr[1]/td[1]/a")
    private WebElement storenameLink;

    @FindBy(xpath = "//*[@id='AppFrameMain']/div/div/div[2]/div/section/div[1]/p/a/span")
    private WebElement storeURl;

    @FindBy(id = "login-submit")
    private WebElement loginSubmit;

    @FindBy(xpath = "//button[contains(text(),'Install unlisted app')]")
    private WebElement installunlistedappLink;

    @FindBy(id = "login-input")
    private WebElement storeURLtxt;

    @FindBy(xpath = "//strong")
    private WebElement devstoreURL;

    public WebElement getShopifyEmail() {
        return shopifyEmail;
    }

    public WebElement getShopifyloginBtn() {
        return shopifyloginBtn;
    }

    public WebElement getShopifyPassword() {
        return shopifyPassword;
    }

    public WebElement getPartnerloginlink() {
        return partnerloginlink;
    }

    public WebElement getCreatestoreLink() {
        return createstoreLink;
    }

    public WebElement getCreatestoreAddress() {
        return createstoreAddress;
    }

    public WebElement getCreatestoreCity() {
        return createstoreCity;
    }

    public WebElement getCreatestoreZip() {
        return createstoreZip;
    }

    public WebElement getCreatestoreCountry() {
        return createstoreCountry;
    }

    public WebElement getCreatestoreState() {
        return createstoreState;
    }

    public WebElement getCreatestoreSave() {
        return createstoreSave;
    }

    public WebElement getPartnerApp_Install_Testing() {
        return partnerApp_Install_Testing;
    }

    public WebElement getStoreName() {
        return storeName;
    }

    public WebElement getPassword() {
        return password;
    }

    public WebElement getConfirmPassword() {
        return confirmPassword;
    }

    public WebElement getShopifypartnerprofileLink() {
        return shopifypartnerprofileLink;
    }

    public WebElement getIntegrationsLink() {
        return integrationsLink;
    }

    public WebElement getAppsLink() {
        return AppsLink;
    }

    public WebElement getUnificqaLink() {
        return unificqaLink;
    }

    public WebElement getCreateappstorelistingLink() {
        return createappstorelistingLink;
    }

    public WebElement getEditappsubmissionformLink() {
        return editappsubmissionformLink;
    }

    public WebElement getViewapplistingLink() {
        return viewapplistingLink;
    }

    public WebElement getGetLink() {
        return getLink;
    }

    public WebElement getStorenameLink() {
        return storenameLink;
    }

    public WebElement getStoreURl() {
        return storeURl;
    }

    public WebElement getLoginSubmit() {
        return loginSubmit;
    }

    public WebElement getInstallunlistedappLink() {
        return installunlistedappLink;
    }

    public WebElement getStoreURLtxt() {
        return storeURLtxt;
    }

    public WebElement getDevstoreURL() {
        return devstoreURL;
    }
}