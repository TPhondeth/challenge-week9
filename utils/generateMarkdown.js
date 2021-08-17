// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  [![license](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description
    ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage 
    ${data.usage}

  ## Tests
    ${data.tests}

  ## License
    This application is covered under the ${data.license} license. <https://choosealicense.com/licenses/${data.license}/>

  ## Contributing
    ${data.contributing}

  ## Questions
    Github: ${data.github} <https://github.com/${data.github}>
    Have additional questions? Please email: ${data.email}\n`;
}

module.exports = generateMarkdown;