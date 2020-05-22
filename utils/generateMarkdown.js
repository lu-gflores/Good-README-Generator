//creating the Markdown layout
function generateMarkdown(data) {
  return `
# ${data.project}

  ![inquirer](https://img.shields.io/bower/l/inquirer)


## Description 
    ${data.description}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  

## Installation

  ${data.install}

## Usage
  ${data.usage}

## License
  This project is licensed under the ${data.license} license

## Contributors
  ${data.contributer}

## Tests
  Run the following command: 
  ${data.test}

## Questions 
Any questions or issues about this repo, contact at Github ${data.username} or via email ${data.email}.
  `;
}

module.exports = generateMarkdown;
