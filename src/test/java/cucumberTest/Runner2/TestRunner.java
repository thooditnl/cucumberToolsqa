package cucumberTest.Runner2;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by THOODI on 2/17/2017.
 */

@CucumberOptions(
        features = "Feature"
        ,glue={"stepDefinations"}
//        ,dryRun = true  //checks the impementation for every steps in feature file to the corresponding steps defination.
        ,monochrome = true   //displays output console in a readable format.
        ,format = {"pretty"}  //generating the reports
//        ,strict = true  // will fail execution if there are undefined or pending steps.
       // ,tags =             // what tags should be executed like smoke , sanity, system.
       )
public class TestRunner extends AbstractTestNGCucumberTests{
    public TestRunner() {
    }
}
