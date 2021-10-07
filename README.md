# WF_TC
WealthForge TestCafe Technical Challenge

## About 
A Testcafe code challenge.
This repository contains a "Tests" directory containing two files, "Test" and "RefactoredTest".
The challenge was to create automated tests using the Testcafe library.
I had to test the user interaction with buttons, input fields, and page navigation. 

## Installation
1. Make sure you have Node.js installed. You can check your current node version using 'node -v' in your CLI. If you do not have node, you can find the download package here: https://nodejs.org/en/
2. Clone down this repo
3. Cd WF_TC
4. Npm install

## How To Run Tests
In order to run the test:
1. Cd into the 'Tests' directory
2. To run 'Test.js' file, run this command in your CLI __'testcafe chrome Test.js --skip-js-errors'__
  - I had to add '--skip-js-errors' so that the tests would run. 
  - If you do not add this, then you will not be able to run the tests.
3. To test the 'RefactoredTest.js' file, run this command in your CLI __'testcafe chrome RefactoredTest.js --skip-js-errors'__
  - To solely focus on one test, put '.only' on the button test.
  - "test.only('User input data', async t =>..."

## Refactored Tests Information
1. While doing this challenge, I realized that one test could satisfy all the required needs. This is why I created the RefactoredTest.js file.
2. In this file, you'll see my original tests have been combined. For example, 'User button click' and 'Page redirection' can be easily tested together. 
3. I then decided to take it a step further in my final refactored test to include 'User button click', 'Page redirection', and 'User input' all in one. 
4. Even though the final test does meet all the requirements in one, I wasn't sure how the company felt about this tactic for developer empathy's sake. 
5. I left the previous tests so that whoever looks at this can see my steps and ability to refactor. 

## Contact and Acknowledgements
- First, I'd like to thank WealthForge for giving me this fun challenge and opportunity!
- I'd also like to thank the people I have discussed with at WealthForge (Amanda, Harry, Obie, and Brian)

If there are feedback or questions, please feel free to contact me at ericberglund117@gmail.com