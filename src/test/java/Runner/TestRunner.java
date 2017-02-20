package Runner;

import cucumber.api.CucumberOptions;

/**
 * Created by THOODI on 2/17/2017.
 */
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "Feature"
        ,glue={"stepDefinations"}
//        ,dryRun = true  //checks the impementation for every steps in feature file to the corresponding steps defination.
        ,monochrome = false   //displays output console in a readable format.
        ,format = {"pretty",
        "html:target/cucumber-html-report"}  //generating the reports
//        ,strict = true  // will fail execution if there are undefined or pending steps.
        ,tags =    {"@tag1"}         // what tags should be executed like smoke , sanity, system.
       )
public class TestRunner extends AbstractTestNGCucumberTests{
    public TestRunner() {
    }
}
//Testing git push
//Testing merge verification


/*
dryRun : It is used to verify that all steps of the feature file defined on step generator or glue code file or not. Syntax is : dryRun= true
        One thing keep in mind that when dryRun=true then entire code should not run only it checks that all the methods matched with feature file or not.
strict: It is used to verify that all steps of the feature file defined on step generator or glue code file or not.
        Syntax is : strict= true
        Difference between dryRun and strict is that strict run allow execute the code and report as fail if any steps not implemented on feature code. */
