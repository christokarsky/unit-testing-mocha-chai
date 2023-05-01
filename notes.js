  /*
  Steps to use Mocha and Chai in a project

  1. Inside main directory, npm init to create package.json. Follow prompts.
    - npm init

  2. Inside main directory, install Mocha & Chai (must be done in every project).
    - npm install --save-dev mocha chai

  3. Create a src folder with a js file that will hold functions to be tested.
    - mkdir src
    - touch <filename>.js

  4. Write your functions & export
    - module.exports = functionOne
    - module.exports = functionTwo
    or
    -module.exports = {functionOne, functionTwo}

  5. Create a test folder with a test file in main directory.
    - mkdir test
    - touch <filename>.test.js

  6. Input the functions into the test file.
    - const functionOne = require("../src/main")
    or
    - const {functionOne, functionTwo} = require("../src/main")

  7. update json to include testing framework.
    - {
        "scripts": {
            "test": "mocha test"
        }
    }

  8. Import chai into the test file.
     - const expect = require("chai").expect

  9. Write tests

  10. Install NYC to show coverage.
    - npm install --save-dev nyc

  11. Update json scripts once more.
     - {
        "scripts": {
            "test": "nyc --reporter=text mocha test"
        }
    }
  */