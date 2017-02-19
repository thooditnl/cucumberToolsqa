Feature: Login Action
  # use (Scenario Outline: )this if you want to run multiple sets of data using Examples.
  @tag1
  Scenario Outline: Successful Login with Valid Credentials
    Given User is on Home Page
    When User Navigate to LogIn Page
    And User enters "<username>" and "<password>"
    Then Message displayed Login Successfully

   # Scenario: Successful LogOut
    When User LogOut from the Application
    Then Message displayed LogOut Successfully
    Then i closed at 9.65 pm

    Examples:
    | username   | password        |
    | thoodi     | cisd6bv)tOey(lU2|
    | kirantsdet | z%lhOh0ykT^tGGij|



#  This uses Example keyword to define the test data for the Scenario
#  This works for the whole test
#  Cucumber automatically run the complete test the number of times equal to the number of data in the Test Set