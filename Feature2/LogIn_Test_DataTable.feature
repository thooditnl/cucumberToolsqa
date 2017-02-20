Feature: Login Action
  # Use (Scenario:) if you want to run one time with out multiple sets of data. And also you can use it to pass a data to a particular step
  Scenario: Successful Login with Valid Credentials
    Given User is on Home Page
    When User Navigate to LogIn Page
    And User enters Credentials to LogIn
      | Username   | Password        |
      | thoodi     | cisd6bv)tOey(lU2|
    Then Message displayed Login Successfully
    When User LogOut from the Application
    Then Message displayed LogOut Successfully


#  No keyword is used to define the test data
#  This works only for the single step, below which it is defined
#  A separate code is need to understand the test data and then it can be run
#  single or multiple times but again just for the single step, not for the complete test