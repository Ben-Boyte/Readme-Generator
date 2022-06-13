function generateMarkdown(data) {
  let licenseOption = `${data.license}`;
  let licenseLink = '';
  if (licenseOption === 'GNU AGPLv3') {
    licenseOption = 'GNUAGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenseOption === 'GNU GPLv3') {
    licenseOption = 'GNUGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseOption === 'GNU LGPLv3') {
    licenseOption = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseOption = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseOption === 'Apache License 2.0') {
    licenseOption = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOption === 'Boost Software License 1.0') {
    licenseOption = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseOption === 'The Unlicense') {
    licenseOption = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };

console.log(licenseOption);

let template =
`# ${data.title}
## Description
${data.description}
![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)`;

let contents =
`## Table of Contents`;
  if (data.installation) {
    contents +=`
  * [Installation](#installation)`
  };

  if (data.instructions) {
    contents +=`

  * [Usage](#usage)`
  };

  if (data.contribution) {
    contents +=`

  * [Contribution](#contribution)`
  };

  if (data.testing) {
    contents +=`

  * [Testing](#testing)`
  };

  template += contents;

  template +=`
  * [Questions](#questions)`;

  template +=`
  * [License](#license)`;

  if (data.installation) {
    template +=`

## Installation
    
  _Follow these steps to properly install this application:_
  ${data.installation}`
  };

  if (data.instructions) {
    template +=`
      
## Usage
  _Instructions for use:_
  ${data.instructions}`
  };

  if (data.contribution) {
    template +=`

  ## Contribution
  _If you would like to contribute, please adhere to these guidelines:_
  ${data.contribution}`
  };
  if (data.testing) {
    template +=`
      
## Testing
  _Instructions for testing application:_
  ${data.testing}`
  };

    template +=`
      
## Questions
      
  _For further questions:_
  ${data.questions}
  
  _Contact Info:_
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})`;
  
  template +=`
    
## License
      
  _This application has the ${data.license}._
      
  For more information please view the [license description](${licenseLink}).`;
  return template;
}

module.exports = generateMarkdown;