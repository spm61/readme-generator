// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge = '';
  switch(license) {
     case('Apache'):
       licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
       break;
     case ('MIT'):
       licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
       break;
     case ('Mozilla-Public'):
       licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
       break;
     case ('GNU-General-Public'):
       licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
       break;
     case ('Boost-Software-License'):
       licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
       break;
     case ('Unlicense'):
       licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
       break;
     default:
       licenseBadge = "";
       break;
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//'Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Boot-Software-License', Unlicense, 'None'
function renderLicenseLink(license) {

  let licenseLink = '';
   switch(license) {
      case('Apache'):
        licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
        break;
      case ('MIT'):
        licenseLink = 'https://choosealicense.com/licenses/mit/';
        break;
      case ('Mozilla-Public'):
        licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
        break;
      case ('GNU-General-Public'):
        licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
        break;
      case ('Boost-Software-License'):
        licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
        break;
      case ('Unlicense'):
        licenseLink = 'https://choosealicense.com/licenses/unlicense/';
        break;
      default:
        licenseLink = "";
        break;
   }
   return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseText = '';
  switch(license) {
     case('Apache'):
       licenseText = 'Apache';
       break;
     case ('MIT'):
       licenseText = 'MIT';
       break;
     case ('Mozilla-Public'):
       licenseText = 'Mozilla Public';
       break;
     case ('GNU-General-Public'):
       licenseText = 'GNU General Public';
       break;
     case ('Boost-Software-License'):
       licenseText = 'Boost Software License';
       break;
     case ('Unlicense'):
       licenseText = 'Unlicense';
       break;
     default:
       licenseLink = "";
       break;
    }
    return licenseText;
}

// TODO: Create a function to generate markdown for README
//Right now only the title is generated.  The rest must be added.
function generateMarkdown(data) {
  //return a string that makes up the readme file in markdown format.  Makes use of template literals so long strings can be used.
  return `# ${data.title}

  ${renderLicenseBadge(data.licensing)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description};

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Licensing:
  This application has the ${renderLicenseSection(data.licensing)} license.
  For more information, please go to 
  ${renderLicenseLink(data.licensing)}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
