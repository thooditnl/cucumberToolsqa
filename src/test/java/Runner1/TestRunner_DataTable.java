package Runner1;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by THOODI on 2/18/2017.
 */
@CucumberOptions(
        features = "Feature1"
        ,glue={"StepDefinations1"}
//        ,dryRun = true  //checks the impementation for every steps in feature file to the corresponding steps defination.
        ,monochrome = true   //displays output console in a readable format.
        ,format = {"pretty",
        "html:target/cucumber-html-report"
        }  //generating the reports
//        ,strict = true  // will fail execution if there are undefined or pending steps.
        // ,tags =             // what tags should be executed like smoke , sanity, system.
)
public class TestRunner_DataTable extends AbstractTestNGCucumberTests {
    public TestRunner_DataTable() {
    }
}
