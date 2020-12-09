# Team Profile Generator Command Line Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a standard software engineering team generator command line application that takes in information about your team's employees and generates an HTML web page highlighting the people working for your company, with summaries for each individual. This web page may be useful to a manager so that he/she has quick access to each employee's email and Github profile. On the other hand, this web page can can also be included on a team's website as a "meet the team page" that helps potential customers and clients get to know the people they might be working with.

### How it works

The following steps explain how this application works:

1. A user is prompted for information about their team's manager and members from the Node CLI. He/she can input any number of team members, which may include mix of engineers and interns.
2. Once the user has completed building their team, or in other words, responded to all the prompts, the application generates an HTML file that displays a nicely formatted team roster based on the information provided by the user.

### Explanation of Object Oriented Programming Concepts Used

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as important as the code itself.

## Table of Contents

- [**Installation**](#installation)
- [**Usage**](#usage)
- [**License**](#license)
- [**Contributing**](#contributing)
- [**Tests**](#tests)
- [**Questions**](#questions)

## Installation

Use the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their Github username.Your app will run as a Node CLI to gather information about each employee. In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.The dependencies are, [**jest**](https://jestjs.io/) for running the provided tests, and [**inquirer**](https://www.npmjs.com/package/inquirer) for collecting input from the user. To install run the following code

```
npm install -y  // to install node modules
npm install jest  // for jest dependencies
npm install inquirer  // for inquirer dependencies
```

## Usage

To use this app, run the app.js file in the project folder. A series of prompts will be generated, answer each question and press enter.
This can be invoked by the following command:

```
node app.js
```

## License

This project is licensed under the [**MIT**](https://opensource.org/licenses/MIT) license.

## Contributing

All comments and suggestions regarding improvements to this project are welcomed. To contribute to this project, clone this [**project repository**](https://github.com/kaylamuraoka/Team_Profile_Generator) locally and commit your code on a separate branch. You may then modify the code to your liking, submit well-formed pull requests and open useful issues. For steps on how to clone a repository using the command line, read this section of the Github Docs [**about cloning a repository**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#about-cloning-a-repository).

## Tests

Testing is a key piece in making code maintainable, thus I have ensured that all unit tests pass.
You can run the tests at any time with the command:

```
npm run test
```

## Questions

Please use the contact information below if you would like to reach me with any questions.

- Github Profile: [**@kaylamuraoka**](https://github.com/kaylamuraoka)
- Email: [**kmurs98@gmail.com**]
