// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answers.license = true) {
    return '(https://img.shields.io/badge/license-${answers.license}-brightgreen)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (answers.license = true) {
    return '(https://choosealicense.com/licenses/${answers.license}/)'
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (answers.license = true) {
    return (license)
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Title
    <h1>${answers.title}</h1>

  (https://img.shields.io/badge/license-${answers.license}-brightgreen)\n

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
    ${answers.usage}

  ## License
    This application is covered under the ${answers.license} license. (https://choosealicense.com/licenses/${answers.license}/)

  ## Contributing
    ${answers.contributing}
  
  ## Tests
    ${answers.tests}

  ## Questions
    ${answers.github} (https://github.com/${answers.github})
    Have additional questions? Please email: ${answers.email}\n
`;
}

module.exports = generateMarkdown;