const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  
  const studentsEmpty = [{}]
  
  const { expect } = require("chai");
  const partitionStudentsByScore = require("../src/main");
  
  describe("partitionStudentsByScore()", () => {
    it("should split students by score", () => {
      const actual = partitionStudentsByScore(students, 8)
      expect(actual).to.have.lengthOf(2)
    });
  
    it('should place all students in first array if necessary', () => {
      const actual = partitionStudentsByScore(students, 10)
      expect(actual[0]).to.have.lengthOf(3)
    });
  
    it('should place all students in second array if necessary', () => {
  const actual = partitionStudentsByScore(students, 0)
  expect(actual[1]).to.have.lengthOf(3)
    });
  
    it("should return an empty array with two arrays if the students list is empty", () => {
      const actual = partitionStudentsByScore(studentsEmpty, 0)
      const expected = [[], []]
      expect(actual).to.eql(expected)
    });
  });

  /*
  Steps to use Mocha and Chai in a project

  1. Inside main directory, npm init to create package.json. Follow prompts.
    - npm init
  2. Inside main directory, install Mocha & Chai (must be done in every project).
    - npm install --save-dev mocha chai
  3. Create a src folder with a js file that will hold functions to be tested.
    - mkdir src
    - touch <filename>.js
  4. 

  */