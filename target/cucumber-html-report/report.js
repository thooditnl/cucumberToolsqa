$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test_DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14076965105,
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
        "Username",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "thoodi",
        "cisd6bv)tOey(lU2"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8201265304,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 726033096,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_enters_testuser_and_Test(Credentials\u003e)"
});
formatter.result({
  "duration": 6290022207,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 448000,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 6535656875,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps_DataTable2.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 197926,
  "status": "passed"
});
formatter.after({
  "duration": 75674834,
  "status": "passed"
});
});