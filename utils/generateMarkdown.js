// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<h1 align="center">${answers.title}</h1>

`;
}
function generateMarkdown(answers) {
  return ` ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

  ## Description
   ${answers.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
   ${answers.installation}

  ## Usage
   ${answers.how}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


  This application is covered by the ${answers.license} license.

  ## Contributing
   ${answers.contribute}

  ## Tests
  - ${answers.test}

  ## Questions
   ${answers.questions}

  <br />
  Find me on GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})<br />

  <br />
  ✉️ Email me with any questions: ${answers.email}<br /><br />
`;
}



module.exports = generateMarkdown;

