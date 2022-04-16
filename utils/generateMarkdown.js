// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return`![badge](https://img.shields.io/badge/license-${license}-green)`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  [description](#description)
  [installation](#installation)
  [license](#license)
  [usage](#usage)
  [contribution](#contribution)
  [questions](#questions) 

  ## Description 
  ${data.description}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Installation
  ${data.installation}
  ## License
  ${data.license}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Questions 2
  ###   GitHub Username:  ${data.githubUsername}
  ###   GitHub Repository:  ${data.githubRepo}
  ###   Email:  ${data.email}
  `;
}

module.exports = generateMarkdown;
