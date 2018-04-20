package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@name='email']")
    private WebElement emailText;

    @FindBy(xpath = "//input[@name='password']")
    private WebElement passwordText;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement loginButton;

    @FindBy(xpath = "//*[@id='auth0-lock-container-1']/div/div[2]/form/div/div/div[2]/div/div/span/span")
    private WebElement invalidloginMessage;

    @FindBy(xpath = "//input[@value='on']")
    private WebElement agreeTnC;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement signupBtn;

    @FindBy(xpath = "//span[contains(text(),'The user already exists.')]")
    private  WebElement userexistsMsg;

    @FindBy(linkText = "Sign Up")
    private WebElement signupLink;

    public WebElement getEmailText() {
        return emailText;
    }

    public WebElement getPasswordText() {
        return passwordText;
    }

    public WebElement getLoginButton() {
        return loginButton;
    }

    public WebElement getInvalidloginMessage() {
        return invalidloginMessage;
    }

    public WebElement getAgreeTnC() { return agreeTnC; }

    public WebElement getSignupBtn() { return signupBtn; }

    public WebElement getUserexistsMsg() { return userexistsMsg; }

    public WebElement getSignupLink() { return signupLink; }
}
