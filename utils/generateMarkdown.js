// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-brightgreen)](https://shields.io)

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
    This application is covered under the ${data.license} license. [License information](https://choosealicense.com/)

  ## Contributing
    ${data.contributing}

  ## Questions
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}\n`;
}

module.exports = generateMarkdown;