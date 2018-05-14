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

    @FindBy(id = "email_type_ahead")
    private WebElement shopifyEmail1;

    @FindBy(id = "account_password")
    private WebElement shopifyPassword;

    @FindBy(xpath = "//*[@id='login_form']/button")
    private WebElement shopifyloginBtn;

    @FindBy(xpath = "//button[@type='submit' and contains(text(),'Continue')]")
    private WebElement continueBtn;

    @FindBy(xpath = "//span[contains(text(),'App_Install_Testing')]")
    private WebElement partnerApp_Install_Testing;

    @FindBy(id = "signup_shop_name")
    private WebElement storeName;

    @FindBy(id = "signup_password")
    private WebElement password;

    @FindBy(id = "confirm_password")
    private WebElement confirmPassword;

   //@FindBy(linkText = "Create store")
   //private WebElement createstoreLink;

    //@FindBy(xpath = "//a[contains(text(),'Create store') an]")
    //private WebElement createstoreLink;

    @FindBy(xpath = "//a[contains(text(),'Create store') and @class='ui-button ui-button--primary ui-title-bar__action']")
    private WebElement createstoreLink;




    //@FindBy(xpath = "//a[contains(text(),'Create store')]")
    //private WebElement createstoreLink;

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

    @FindBy(xpath = "//span[contains(text(),'Unific')]")
    private WebElement unificLink;

    @FindBy(xpath = "//span[contains(text(),'Apps')]")
    private WebElement AppsLink;

    //@FindBy(linkText = "Visit Shopify App Store")
    //private WebElement VisitAppstoreLink;

    @FindBy(xpath = "//a[contains(text(),'Visit Shopify App Store') and @class='ui-button ui-button--primary ui-title-bar__action']")
    private WebElement VisitAppstoreLink;

    @FindBy(linkText = "unific-qa")
    private WebElement unificqaLink;

    @FindBy(linkText = "unific-dev")
    private WebElement unificdevLink;

    @FindBy(linkText = "unific-staging")
    private WebElement unificstagingLink;

    @FindBy(linkText = "unific-prod")
    private WebElement unificprodLink;

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

    @FindBy(xpath = "//button[contains(text(),'Install app')]")
    private WebElement installlistedappLink;

    @FindBy(id = "login-input")
    private WebElement storeURLtxt;

    @FindBy(xpath = "//strong")
    private WebElement devstoreURL;

    @FindBy(id="q")
    private WebElement shopifystoreSearch;

    @FindBy(xpath = "//a//p[contains(text(),'Unific')]")
    private WebElement unificSearchLink;

    @FindBy(xpath = "//a[@data-app-id='13686']")
    private WebElement unificProdAppLink;

    @FindBy(xpath="//button[contains(text(),'Approve charge') and @class='ui-button ui-button--primary js-btn-loadable has-loading']")
    private WebElement ApproveChagesBtn;

    @FindBy(xpath="//h1[contains(text(),'Tell us a little about yourself')]")
    private WebElement tellusTitle;

    @FindBy(id="account_setup_background")
    private WebElement alreadySellingList;

    @FindBy(id = "account_setup_previous_platform")
    private WebElement systemusedmostList;

    @FindBy(id = "account_setup_business_revenue")
    private  WebElement currentrevenueList;

    @FindBy(xpath = "//label[@class='marketing-checkbox-label' and @for='account_setup_potential_partner']")
    private WebElement check;

    @FindBy(xpath = "//button[@class='marketing-button' and @data-nav='next' and @type='button']")
    private  WebElement NextBtn;

    @FindBy(id ="account_setup_first_name")
    private WebElement firstName;

    @FindBy(id ="account_setup_lastt_name")
    private WebElement lasttName;

    @FindBy(id ="zip")
    private WebElement zip;

    @FindBy(id ="phone number")
    private WebElement phonenumber;

    public WebElement getPhonenumber() { return phonenumber; }

    public WebElement getZip() { return zip; }

    public WebElement getLasttName() { return lasttName; }

    public WebElement getFirstName() { return firstName; }

    public WebElement getNextBtn() { return NextBtn; }

    public WebElement getCheck() { return check; }

    public WebElement getCurrentrevenueList() { return currentrevenueList; }

    public WebElement getSystemusedmostList() { return systemusedmostList; }

    public WebElement getAlreadySellingList() { return alreadySellingList; }

    public WebElement getTellusTitle() { return tellusTitle; }

    public WebElement getApproveChagesBtn() {
        return ApproveChagesBtn;
    }

    public WebElement getContinueBtn() { return continueBtn; }

    public WebElement getShopifyEmail1() { return shopifyEmail1; }

    public WebElement getUnificProdAppLink() { return unificProdAppLink; }

    public WebElement getUnificSearchLink() { return unificSearchLink; }

    public WebElement getShopifystoreSearch() { return shopifystoreSearch; }

    public WebElement getUnificLink() { return unificLink; }

    public WebElement getShopifyEmail() {
        return shopifyEmail;
    }

    public WebElement getShopifyloginBtn() {
        return shopifyloginBtn;
    }

    public WebElement getShopifyPassword() {
        return shopifyPassword;
    }

    public WebElement getPartnerloginlink() { return partnerloginlink; }

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

    public WebElement getAppsLink() { return AppsLink; }

    public WebElement getVisitAppstoreLink() { return VisitAppstoreLink; }

    public WebElement getUnificqaLink() { return unificqaLink; }

    public WebElement getUnificdevLink() { return unificdevLink; }

    public WebElement getUnificprodLink() { return unificprodLink; }

    public WebElement getUnificstagingLink() { return unificstagingLink; }

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

    public WebElement getLoginSubmit() { return loginSubmit; }

    public WebElement getInstallunlistedappLink() { return installunlistedappLink; }

    public WebElement getInstalllistedappLink() { return installlistedappLink; }

    public WebElement getStoreURLtxt() { return storeURLtxt; }

    public WebElement getDevstoreURL() {
        return devstoreURL;
    }
}