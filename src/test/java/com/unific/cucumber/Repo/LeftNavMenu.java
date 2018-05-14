package com.unific.cucumber.Repo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LeftNavMenu {
    public LeftNavMenu(WebDriver driver){ PageFactory.initElements(driver,this);}

    @FindBy(id = "/campaigns")
    private WebElement CampaignsLink;

    public WebElement getCampaignsLink() { return CampaignsLink; }
}
