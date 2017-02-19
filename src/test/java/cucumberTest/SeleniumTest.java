package cucumberTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

/**
 * Created by THOODI on 2/17/2017.
 */
public class SeleniumTest {
    private static WebDriver driver = null;
    public static void main(String[] args) {
        // Create a new instance of the Firefox driver
        driver = new FirefoxDriver();
        //Put a Implicit wait, this means that any search for elements on the page could take the time the implicit wait is set for before throwing exception
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://www.store.demoqa.com");
        driver.findElement(By.xpath(".//*[@id='account']/a")).click();
        driver.findElement(By.id("log")).sendKeys("thoodi");
        driver.findElement(By.id("pwd")).sendKeys("cisd6bv)tOey(lU2");
        driver.findElement(By.id("login")).click();
        System.out.println("Login Successfully");
        driver.findElement (By.xpath(".//*[@id='account_logout']/a")).click();
        System.out.println("LogOut Successfully");
        driver.quit();
    }
}
