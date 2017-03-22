package testfiles;

import java.util.HashMap;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.ReadExcel;

public class FacebookLoginPage {
	
	public WebDriver driver;
	public List<HashMap<String, String>> logindata;
	
	
	@Before
	
	public void intialize() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RG043798.WHQ_NT_DOMAIN\\Desktop\\Selenium stuff\\chromedriver.exe");
	    driver = new ChromeDriver();
	    logindata = new ReadExcel("C:\\RahulExcel.xlsx").readData("Credentials");
		
	}
	
	
	@After
	public void quitDriver() {
		
		driver.close();
	}
	
	@Given("^Launch \"([^\"]*)\" and open facebook login page$")
	public void launchlogin(String browser) throws Throwable {
		
	    driver.manage().window().maximize();
	    driver.get("https://www.facebook.com/");
	}
	

	@When("^I read data from excel$")
	public void i_read_data_from_excel() throws Throwable {
	   
	  
	}
	
	@When("^Enter username and password from excel \"([^\"]*)\"and press login$")
	public void enter_username_and_password_from_excel_and_press_login(String arg1) throws Throwable {
		
		int index = Integer.parseInt(arg1)-1;
		
		driver.findElement(By.id("email")).sendKeys(logindata.get(index).get("Username"));
		driver.findElement(By.id("pass")).sendKeys(logindata.get(index).get("Password"));
		driver.findElement(By.xpath("//input[@value='Log In']")).click();
		
		
	}

	
	
	


	@Then("^user is logged in sussessfully$")
	public void login() throws Throwable {
	 
		Assert.assertEquals("Facebook",driver.getTitle());
		
	 
	}
	
	@When("^Enter invalid username and password and press login$")
	public void invalidcredentials() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("arahul.goyal223");
		driver.findElement(By.id("pass")).sendKeys("aAkshi@1234");
		
	}
	
	@Then("^user is not logged in sussessfully$")
	public void notLogin() throws Throwable {
		
		driver.findElement(By.xpath("//input[@value='Log In']")).click();
		Assert.assertEquals("Log1 in to Facebook | Facebook", driver.getTitle());
		driver.close();
	    
	}

}
