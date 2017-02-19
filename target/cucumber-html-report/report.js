$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test_DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14420018007,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# Use (Scenario:) if you want to run one time with out multiple sets of data. And also you can use it to pass a data to a particular step"
    }
  ],
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "thoodi",
        "cisd6bv)tOey(lU2"
      ],
      "line": 8
    },
    {
      "cells": [
        "kirantsdet",
        "z%lhOh0ykT^tGGij"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8566915332,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 550131141,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_enters_testuser_and_Test(Credentials\u003e)"
});
formatter.result({
  "duration": 52587436,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 196741,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 15218907568,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027account_logout\u0027]/a\"}\nCommand duration or timeout: 13.21 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-G73P78Q\u0027, ip: \u0027169.254.97.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 386b3ddf-1779-4100-98cd-51d80d18bc4b\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027account_logout\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefinations2.Test_Steps_DataTable2.user_LogOut_from_the_Application(Test_Steps_DataTable2.java:75)\r\n\tat ✽.When User LogOut from the Application(LogIn_Test_DataTable.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027account_logout\u0027]/a\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-G73P78Q\u0027, ip: \u0027169.254.97.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/THOODI/AppData/Local/Temp/anonymous3790048219184151071webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/THOODI/AppData/Local/Temp/anonymous3790048219184151071webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 59847878,
  "status": "passed"
});
});