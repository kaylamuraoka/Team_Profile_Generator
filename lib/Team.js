// code to define and export the Team class
class Team {
  constructor(name, numOfEmp) {
    this.name = name;
    this.numOfEmp = numOfEmp;
  }

  getName() {
    return this.name;
  }

  getNumOfEmp() {
    return this.numOfEmp;
  }
}
module.exports = Team;
