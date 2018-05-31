package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class TemplateEditorPage {

    public TemplateEditorPage(WebDriver driver){ PageFactory.initElements(driver,this);}

    @FindAll(@FindBy(xpath = "//div[starts-with(@class,'text-center align-items-center d-flex justify-content-center ')]/div/div[starts-with(text(),'Coupon')]"))
    private List<WebElement> CouponList;

    @FindBy(xpath = "//div[contains(text(),'Coupon Snippets')]")
    private WebElement CouponSnippetsLink;

    @FindBy(xpath = "//div[contains(text(),'Global Theme Styles')]")
    private WebElement GlobalThemeStyleLink;

    @FindBy(xpath = "//div[contains(text(),'Standard Blocks')]")
    private WebElement StandardBlockLink;

    @FindBy(xpath = "//div[contains(text(),'Ecommerce Snippets')]")
    private WebElement EcommerceSnippetLink;

    @FindBy(xpath = "//div[contains(text(),'Billing and Shipping Information')]")
    private WebElement BillingAndShippingInformationSnippet;

    @FindBy(xpath = "//div[contains(text(),'Order Totals')]")
    private WebElement OrderTotalsSnippet;

    @FindBy(xpath = "//div[contains(text(),'Billing Information')]")
    private WebElement BillingInformationSnippet;

    @FindBy(xpath = "//div[contains(text(),'Shipping Information')]")
    private WebElement ShippingInformationSnippet;

    @FindBy(xpath = "//div[contains(text(),'Abandoned Cart Items')]")
    private WebElement AbandonedCartItemsSnippet;

    @FindBy(xpath = "//div[contains(text(),'Order Items')]")
    private WebElement OrderItemsSnippet;

    @FindAll(@FindBy(xpath = ".//*[@id='app']/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div/div"))
    private List<WebElement> StandardBlocks;

    @FindBy(xpath = ".//*[@id='app']/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/div/div[contains(text(),'Text')]")
    private WebElement TextBlock;

    @FindBy(xpath = "//span[contains(text(),'Clear Template')]")
    private WebElement ClearTemplate;

    @FindBy(xpath = "//div[starts-with(@class,'css-mve')]")
    private WebElement Templatecanvas;

    public WebElement getTextBlock() { return TextBlock; }

    public WebElement getTemplatecanvas() { return Templatecanvas; }

    public WebElement getClearTemplate() { return ClearTemplate; }

    public List<WebElement> getStandardBlocks() { return StandardBlocks; }

    public WebElement getOrderItemsSnippet() { return OrderItemsSnippet;  }

    public WebElement getAbandonedCartItemsSnippet() { return AbandonedCartItemsSnippet; }

    public WebElement getShippingInformationSnippet() { return ShippingInformationSnippet; }

    public WebElement getBillingInformationSnippet() { return BillingInformationSnippet; }

    public WebElement getBillingAndShippingInformationSnippet() { return BillingAndShippingInformationSnippet; }

    public WebElement getOrderTotalsSnippet() { return OrderTotalsSnippet; }

    public WebElement getEcommerceSnippetLink() { return EcommerceSnippetLink; }

    public WebElement getStandardBlockLink() { return StandardBlockLink; }

    public WebElement getGlobalThemeStyleLink() { return GlobalThemeStyleLink; }

    public List<WebElement> getCouponList() { return CouponList; }

    public WebElement getCouponSnippetsLink() { return CouponSnippetsLink; }
}

