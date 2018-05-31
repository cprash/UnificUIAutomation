package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CampaignCreate {

    public CampaignCreate(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//div[@id='jsPlumb_2_2']/div/div")
    private WebElement startingtriggerLink;

    @FindBy(xpath = "//div[@data-test='ORDER_CONFIRMATION']")
    private WebElement orderconfirmationLink;

    @FindBy(xpath = "//div[@data-test='ABANDONED_CART']")
    private WebElement abandonedcartLink;

    @FindBy(xpath = "//div[@data-test='ORDER_CREATED']")
    private WebElement ordercreateLink;

    @FindBy(xpath = "//div[@data-test='ORDER_PAID']")
    private WebElement orderpaidLink;

    @FindBy(xpath = "//div[@data-test='ORDER_FULFILLED']")
    private WebElement orderfulfilledLink;

    @FindBy(xpath = "//div[@data-test='ORDER_PARTIALLY_FULFILLED")
    private WebElement partiallyfulfilledLink;

    @FindBy(xpath = "//button[@data-test='next-action-button']")
    private WebElement nextBtn;

    @FindBy(xpath = "//div[@class='column col-12 col']//button[contains(text(),'Save')]")
    private WebElement saveBtn;

    @FindBy(xpath = "//div[@class='col']//button[contains(text(),'Save')]")
    private WebElement selectactionsaveBtn;

    @FindBy(xpath = "//input[@placeholder='Campaign title']")
    private WebElement campaigntitleTxt;

    @FindBy(xpath = "//div[contains(@id,'jsPlumb')]//i[@class='fa fa-plus-circle fa-2x']")
    private WebElement selectanactionLink;

    @FindBy(xpath = "//div[@data-test='SEND_EMAIL']")
    private WebElement sendEmailLink;

    @FindBy(xpath = "//input[@id='[email][subject]']")
    private WebElement subjectLineTxt;

    @FindBy(xpath = "//input[@id='[email][pre_header]']")
    private WebElement preHeaderTxt;

    @FindBy(xpath = "//button[@id='edit-email-button']")
    private WebElement editEmailBtn;

    @FindBy(xpath = "//*[contains(text(),'End goal')]")
    private WebElement endgoalLink;

    @FindBy(xpath = "//div[@data-test='ORDER_CREATED_goal']")
    private WebElement ordercreategoalLink;

    @FindBy(xpath = "//div[@data-test='ORDER_FULFILLED_goal']")
    private WebElement orderfulfilledgoalLink;

    @FindBy(xpath = "//div[@data-test='ORDER_PARTIALLY_FULFILLED_goal']")
    private WebElement orderpartiallyfulfilledgoalLink;

    @FindBy(xpath = "//div[@data-test='ORDER_PAID_goal']")
    private WebElement orderpaidgoalLink;

    @FindBy(xpath = "//button[@data-test='save-campaign-draft-button']")
    private WebElement savedraftLink;

    @FindBy(xpath = "//button[@data-test='save-publish-button']")
    private WebElement publishLink;

    @FindBy(xpath = "//i[@class='fa fa-check-circle fa-2x']")
    private WebElement publishCheck;

    @FindBy(xpath = "//button[@class='btn btn-link' and @type='button']/i")
    private WebElement cancelLink;

    @FindBy(id = "edit-email-button")
    private WebElement EditEmailLink;

    public WebElement getEditEmailLink() { return EditEmailLink; }

    public WebElement getStartingtriggerLink() { return startingtriggerLink; }

    public WebElement getOrderconfirmationLink() { return orderconfirmationLink; }

    public WebElement getOrdercreateLink() { return ordercreateLink; }

    public WebElement getOrderpaidLink() { return orderpaidLink; }

    public WebElement getOrderfulfilledLink() { return orderfulfilledLink; }

    public WebElement getPartiallyfulfilledLink() { return partiallyfulfilledLink; }

    public WebElement getNextBtn() { return nextBtn; }

    public WebElement getSaveBtn() { return saveBtn; }

    public WebElement getSelectactionsaveBtn() { return selectactionsaveBtn; }

    public WebElement getCampaigntitleTxt() { return campaigntitleTxt; }

    public WebElement getSelectanactionLink() { return selectanactionLink; }

    public WebElement getSendEmailLink() { return sendEmailLink; }

    public WebElement getSubjectLineTxt() { return subjectLineTxt; }

    public WebElement getPreHeaderTxt() { return preHeaderTxt; }

    public WebElement getEditEmailBtn() { return editEmailBtn; }

    public WebElement getEndgoalLink() { return endgoalLink; }

    public WebElement getOrdercreategoalLink() { return ordercreategoalLink; }

    public WebElement getOrderfulfilledgoalLink() { return orderfulfilledgoalLink; }

    public WebElement getOrderpartiallyfulfilledgoalLink() { return orderpartiallyfulfilledgoalLink; }

    public WebElement getOrderpaidgoalLink() { return orderpaidgoalLink; }

    public WebElement getSavedraftLink() { return savedraftLink; }

    public WebElement getPublishLink() { return publishLink; }

    public WebElement getAbandonedcartLink() { return abandonedcartLink; }

    public WebElement getPublishCheck() { return publishCheck; }

    public WebElement getCancelLink() { return cancelLink; }
}
