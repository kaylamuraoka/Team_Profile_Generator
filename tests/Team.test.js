const Team = require("../lib/Team");

test("Can instantiate Team instance", () => {
  const team = new Team();
  expect(typeof team).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "The Avengers Marvel Universe Team";
  const team = new Team(name);
  expect(team.name).toBe(name);
});

test("Can set numOfEmp via constructor argument", () => {
  const testValue = 5;
  const team = new Team("The Avengers Team", testValue);
  expect(team.numOfEmp).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "The Avengers Team";
  const team = new Team(testValue);
  expect(team.getName()).toBe(testValue);
});

test("Can get numOfEmp via getNumOfEmp()", () => {
  const testValue = 5;
  const team = new Team("The Avengers Team", testValue);
  expect(team.getNumOfEmp()).toBe(testValue);
});
