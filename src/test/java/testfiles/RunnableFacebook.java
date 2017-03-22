package testfiles;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"Features/Facebook.Feature"}, glue={"testfiles"}, plugin={"html:target/cucumber-htmo-report"})
public class RunnableFacebook {

}
