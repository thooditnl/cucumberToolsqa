package StepDefinations2;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.DataTableRow;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static com.sun.xml.internal.fastinfoset.alphabet.BuiltInRestrictedAlphabets.table;

/**
 * Created by THOODI on 2/18/2017.
 */
public class Test_Steps_DataTable2 {

    private static WebDriver driver = null;


    @Before
    public void setUp() {
        driver = new FirefoxDriver();
        //Put a Implicit wait, this means that any search for elements on the page could take the time the implicit wait is set for before throwing exception
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }


    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page(){
        driver.get("http://www.store.demoqa.com");
    }

    @When("^User Navigate to LogIn Page$")
    public void user_Navigate_to_LogIn_Page(){
        driver.findElement(By.xpath(".//*[@id='account']/a")).click();
    }

    @When("^User enters Credentials to LogIn$")
    public void user_enters_testuser_and_Test(List<Credentials>  usercredentials) throws InterruptedException {
        usercredentials = new ArrayList<Credentials>();
     //   usercredentials = table.asList(Credentials.class);
        for (Credentials credentials : usercredentials) {
            driver.findElement(By.id("log")).sendKeys(credentials.getUsername());
            driver.findElement(By.id("pwd")).sendKeys(credentials.getPassword());
            driver.findElement(By.id("login")).click();
            Thread.sleep(2000);
        }
    }


    @Then("^Message displayed Login Successfully$")
    public void message_displayed_Login_Successfully() {
        System.out.println("Login Successfully");
    }


    @When("^User LogOut from the Application$")
    public void user_LogOut_from_the_Application() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement (By.xpath(".//*[@id='account_logout']/a")).click();
    }
    @Then("^Message displayed LogOut Successfully$")
    public void message_displayed_LogOut_Successfully()  {
        System.out.println("LogOut Successfully");
    }


    @After
    public void cleanUp() {
        driver.close();
    }


}
