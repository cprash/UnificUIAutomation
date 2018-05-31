package com.unific.cucumber;

import com.unific.cucumber.Repo.*;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class Browser {
    private WebDriver driver;
    private Properties prop;
    private String os;
    private LoginPage loginPage;
    private CampaignDashboard campaignDashboard;
    private CampaignCreate campaignCreate;
    private ShopifyPartners shopifyPartners;
    private PostSignUp postSignUp;
    private LeftNavMenu leftNavMenu;
    private SnippetsPage snippetsPage;
    private TemplateEditorPage templateEditorPage;


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

        cache.setCapability("applicationCacheEnabled", true);

        os = System.getProperty("os.name").toLowerCase();

        String browser = prop.getProperty("browser");
        System.out.println(browser);
        if(os.startsWith("windows"))
        {
            if ("chrome".equals(browser)) {
                System.setProperty("webdriver.chrome.driver", prop.getProperty("driverExecutable") + "/chromedriverWin.exe");
                driver = new ChromeDriver(cache);
                driver.manage().window().maximize();
                //driver.manage().deleteAllCookies();
                driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
            }
            }
        if(os.equalsIgnoreCase("linux"))
        {
        if ("chrome".equals(browser))
        {
            System.setProperty("webdriver.chrome.driver", prop.getProperty("driverExecutable") + "/chromedriver");
            driver = new ChromeDriver(cache);
            driver.manage().window().maximize();
            //driver.manage().deleteAllCookies();
            driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);

        }
        else if ("firefox".equals(browser))
        {
            System.setProperty("webdriver.gecko.driver", prop.getProperty("driverExecutable") + "/geckodriver");
            driver = new FirefoxDriver(cache);
            System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE,"false");
            driver.manage().window().maximize();
            driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);

        }
        else if ("safari".equals(browser))
        {
            driver = new SafariDriver();
            driver.manage().window().maximize();
            driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
        }
        else if("chromeheadless".equals(browser))
        {

            System.setProperty("webdriver.chrome.driver", prop.getProperty("driverExecutable") + "/chromedriver");
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("window-size=1400,800");
            chromeOptions.addArguments("--headless");
            driver = new ChromeDriver(chromeOptions);
            driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
            //driver.manage().window().maximize();
        }
        else if("firefoxheadless".equals(browser))
        {

            System.setProperty("webdriver.gecko.driver", prop.getProperty("driverExecutable") + "/geckodriver");
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            firefoxOptions.addArguments("window-size=1400,800");
            firefoxOptions.addArguments("--headless");
            driver = new FirefoxDriver(firefoxOptions);
            System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE,"false");
            driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
            //driver.manage().window().maximize();
        }

        driver.manage().deleteAllCookies();
    }
        else if(os.startsWith("mac")) {
            if ("chrome".equals(browser)) {
                System.setProperty("webdriver.chrome.driver", prop.getProperty("driverExecutable") + "/chromedriverMac");
                driver = new ChromeDriver(cache);
                driver.manage().window().maximize();
                //driver.manage().deleteAllCookies();
                driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);

            }
            else if ("firefox".equals(browser)) {
                System.setProperty("webdriver.gecko.driver", prop.getProperty("driverExecutable") + "/geckodriverMac");
                driver = new FirefoxDriver(cache);
                driver.manage().window().maximize();
                driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);

            }
            else if ("safari".equals(browser)) {
                driver = new SafariDriver();
                driver.manage().window().maximize();
                driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
            }
            else if("chromeheadless".equals(browser))
            {

                System.setProperty("webdriver.chrome.driver", prop.getProperty("driverExecutable") + "/chromedriverMac");
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("window-size=1400,800");
                chromeOptions.addArguments("--headless");
                driver = new ChromeDriver(chromeOptions);
                //driver.manage().window().maximize();
                driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
            }
            else if("firefoxheadless".equals(browser))
            {

                System.setProperty("webdriver.gecko.driver", prop.getProperty("driverExecutable") + "/geckodriverMac");
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.addArguments("window-size=1400,800");
                firefoxOptions.addArguments("--headless");
                driver = new FirefoxDriver(firefoxOptions);
                System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE,"false");
                //driver.manage().window().maximize();
                driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.MINUTES);
            }
            driver.manage().deleteAllCookies();
        }

        loginPage = new LoginPage(driver);
        campaignDashboard = new CampaignDashboard(driver);
        campaignCreate = new CampaignCreate(driver);
        shopifyPartners= new ShopifyPartners(driver);
        postSignUp = new PostSignUp(driver);
        leftNavMenu = new LeftNavMenu(driver);
        snippetsPage = new SnippetsPage(driver);
        templateEditorPage = new TemplateEditorPage(driver);

        //homePage = new HomePage(driver);
        //settings = new SettingsPage(driver);
    }
        public WebDriver getDriver(){ return driver; }

        public Properties getProp(){ return prop; }

        public String getOs() { return os; }

        public LoginPage getLoginPage() { return loginPage; }

        public CampaignDashboard getCampaignDashboard() { return campaignDashboard; }

        public CampaignCreate getCampaignCreate() { return campaignCreate; }

        public ShopifyPartners getShopifyPartners() { return shopifyPartners; }

        public PostSignUp getPostSignUp() { return postSignUp; }

        public LeftNavMenu getLeftNavMenu() { return leftNavMenu; }

        public SnippetsPage getSnippetsPage() { return snippetsPage; }

        public TemplateEditorPage getTemplateEditorPage() { return templateEditorPage; }

    @After
        public void tearDown(){
                driver.quit();
        }
}

