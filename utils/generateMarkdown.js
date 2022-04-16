// renderLicenseBadge is a function that returns a license badge imported from shield.io 
// based upon which "license" the user selects 

function renderLicenseBadge(license) {
  return`![badge](https://img.shields.io/badge/license-${license}-green)`
}

// Every project should have a license, even if it is a very unrestrictive one from
// my research

// This function is used to generate a markdown for a professional README
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
// This exports the function generateMarkdown
module.exports = generateMarkdown;
