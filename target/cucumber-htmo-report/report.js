$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Facebook.Feature");
formatter.feature({
  "line": 1,
  "name": "Facebook",
  "description": "\nBaground:\nGiven: data",
  "id": "facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To check user is able to login with valid credentials",
  "description": "",
  "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Launch \"browser\" and open facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter username and password from excel \"\u003cRow\u003e\"and press login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user is logged in sussessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Row"
      ],
      "line": 12,
      "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 13,
      "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 14,
      "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3467720752,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To check user is able to login with valid credentials",
  "description": "",
  "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Launch \"browser\" and open facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter username and password from excel \"1\"and press login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user is logged in sussessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 8
    }
  ],
  "location": "FacebookLoginPage.launchlogin(String)"
});
formatter.result({
  "duration": 9065179648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "FacebookLoginPage.enter_username_and_password_from_excel_and_press_login(String)"
});
formatter.result({
  "duration": 380549480,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginPage.login()"
});
formatter.result({
  "duration": 25418836016,
  "status": "passed"
});
formatter.after({
  "duration": 193224706,
  "status": "passed"
});
formatter.before({
  "duration": 2006946408,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To check user is able to login with valid credentials",
  "description": "",
  "id": "facebook;to-check-user-is-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Launch \"browser\" and open facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter username and password from excel \"2\"and press login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user is logged in sussessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 8
    }
  ],
  "location": "FacebookLoginPage.launchlogin(String)"
});
formatter.result({
  "duration": 7223896057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ],
  "location": "FacebookLoginPage.enter_username_and_password_from_excel_and_press_login(String)"
});
formatter.result({
  "duration": 230727102,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log In\u0027]\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027WIN1417588\u0027, ip: \u00272.0.0.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\RG0437~1.WHQ\\AppData\\Local\\Temp\\scoped_dir19648_23515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4cb9f1562e8362f12c50996f3b9a4304\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log In\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat testfiles.FacebookLoginPage.enter_username_and_password_from_excel_and_press_login(FacebookLoginPage.java:61)\r\n\tat ✽.When Enter username and password from excel \"2\"and press login(Features/Facebook.Feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FacebookLoginPage.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2315823073,
  "status": "passed"
});
});