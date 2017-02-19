package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

/**
 * Created by THOODI on 2/17/2017.
 */

public class Test_Steps {
    private static WebDriver driver = null;

    @Before
    public void setUp() {
        driver = new FirefoxDriver();
        //Put a Implicit wait, this means that any search for elements on the page could take the time the implicit wait is set for before throwing exception
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page()  {
        driver.get("http://www.store.demoqa.com");
    }
    @When("^User Navigate to LogIn Page$")
    public void user_Navigate_to_LogIn_Page(){
        driver.findElement(By.xpath(".//*[@id='account']/a")).click();
    }
    @When("^User enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_UserName_and_Password(String username, String password){
        driver.findElement(By.id("log")).sendKeys(username);
        driver.findElement(By.id("pwd")).sendKeys(password);
        driver.findElement(By.id("login")).click();
    }
    @Then("^Message displayed Login Successfully$")
    public void message_displayed_Login_Successfully(){
        System.out.println("Login Successfully");
    }
    @When("^User LogOut from the Application$")
    public void user_LogOut_from_the_Application() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement (By.xpath(".//*[@id='account_logout']/a")).click();
    }
    @Then("^Message displayed LogOut Successfully$")
    public void message_displayed_LogOut_Successfully()  {
        System.out.println("LogOut Successfully");
    }

    @Then("^i closed at (\\d+)\\.(\\d+) pm$")
    public void i_closed_at_pm(int arg1, int arg2)  {
        System.out.println("The application closed at "+ arg1 +"."+ arg2+ " pm");
    }

    @After
    public void cleanUp() {
       driver.close();
    }
}
//So to bring optimization, hooks can be utilized.
// More often we use two types of hooks: “Before” hook and “After” hook.
// Method/function/piece of code, defined within Before and After hooks, always run, even if the scenario gets passed or failed.
// As the name suggests, before hook gets executed well before any other test scenarios,
// and after hook gets executed after executing all the scenarios.