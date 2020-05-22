//creating the Markdown layout
function generateMarkdown(data) {
  return `
# ${data.project}
  ${data.license}
## Description 
    ${data.description}
## Table of Contents
  *[Installation](#install)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributer)
  

## Installation

  ${data.install}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributors
  ${data.contributing}

## Tests
  Run the following command: 
  ${data.test}
## Questions 
Any questions or issues about this repo, contact at Github ${data.name} or via email ${data.email}.
  `;
}

module.exports = generateMarkdown;
