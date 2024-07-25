// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenseInfo[license]) {
    return `![License](${licenseInfo[license].badge})`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licenseInfo[license]) {
    return licenseInfo[license].url;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenseInfo[license]) {
    return `
## License

This project is licensed under the ${license} License - see the [LICENSE](${renderLicenseLink(
      license
    )}) file for details.
`;
  }
  return "";
}

// License info
const licenseInfo = {
  MIT: {
    url: "https://opensource.org/licenses/MIT",
    badge: "https://img.shields.io/badge/license-MIT-brightgreen",
  },
  "GNU GPLv3": {
    url: "https://www.gnu.org/licenses/gpl-3.0",
    badge: "https://img.shields.io/badge/license-GPLv3-brightgreen",
  },
  "Apache 2.0": {
    url: "https://opensource.org/licenses/Apache-2.0",
    badge: "https://img.shields.io/badge/license-Apache%202.0-brightgreen",
  },
  ISC: {
    url: "https://opensource.org/licenses/ISC",
    badge: "https://img.shields.io/badge/license-ISC-brightgreen",
  },
  "Mozilla Public License 2.0": {
    url: "https://opensource.org/licenses/MPL-2.0",
    badge: "https://img.shields.io/badge/license-MPL%202.0-brightgreen",
  },
  Unlicense: {
    url: "https://unlicense.org/",
    badge: "https://img.shields.io/badge/license-Unlicense-brightgreen",
  },
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<div align="center">

  <!-- Add badges using the following format: -->
  <!-- ![Name](urlToShieldHere)(urlToGithubHere) -->
${renderLicenseBadge(data.license)}
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555)](www.linkedin.com/in/shreyayerragudi)
</div>

# ${data.title}

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## About the Project
${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Contributing
Feel free to fork the repository and submit pull requests.

## Tests
To run tests, execute npm test

## Questions
If you have any questions, please open an issue or contact me directly at ${
    data.email
  }(mailto:${
    data.email
  }). You can find more of my work at [githubuser](https://github.com/${
    data.githubUsername
  }).
    `;
}

module.exports = generateMarkdown;
