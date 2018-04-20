package com.unific.cucumber;

import com.unific.cucumber.Repo.*;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;
import java.util.Properties;

public class Browser {
    private WebDriver driver;
    private Properties prop;
    private LoginPage loginPage;
    private CampaignDashboard campaignDashboard;
    private CampaignCreate campaignCreate;
    private ShopifyPartners shopifyPartners;
    private PostSignUp postSignUp;

    public DesiredCapabilities cache=new DesiredCapabilities();


    @Before
    public void setUp() {
        FileInputStream f = null;
        try {
            f = new FileInputStream(new File("src/test/Resources/com/unific/cucumber/config.properties"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        prop = new Properties();
        try {
            prop.load(f);
        } catch (IOException e) {
            e.printStackTrace();
        }

        cache.setCapability("applicationCacheEnabled",true);



        String browser = prop.getProperty("browser");
        if ("chrome".equals(browser)) {
            System.setProperty("webdriver.chrome.driver", prop.getProperty("driverExecutable") + "/chromedriver");
            driver = new ChromeDriver(cache);
            driver.manage().window().maximize();
            //driver.manage().deleteAllCookies();

        } else if ("firefox".equals(browser)) {
            System.setProperty("webdriver.gecko.driver", prop.getProperty("driverExecutable") + "/geckodriver");
            driver = new FirefoxDriver(cache);
            driver.manage().window().maximize();

        } else if ("safari".equals(browser)) {
            driver = new SafariDriver();
            driver.manage().window().maximize();
        }

        String environment;



        loginPage = new LoginPage(driver);
        campaignDashboard = new CampaignDashboard(driver);
        campaignCreate = new CampaignCreate(driver);
        shopifyPartners= new ShopifyPartners(driver);
        postSignUp = new PostSignUp(driver);

        //homePage = new HomePage(driver);
        //settings = new SettingsPage(driver);
    }
        public WebDriver getDriver(){ return driver; }

        public Properties getProp(){ return prop; }

        public LoginPage getLoginPage() { return loginPage; }

        public CampaignDashboard getCampaignDashboard() { return campaignDashboard; }

        public CampaignCreate getCampaignCreate() { return campaignCreate; }

        public ShopifyPartners getShopifyPartners() { return shopifyPartners; }

        public PostSignUp getPostSignUp() { return postSignUp; }

    @After
        public void tearDown(){
                driver.quit();
        ;}
}

