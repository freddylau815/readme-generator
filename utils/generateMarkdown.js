// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
  return `https://choosealicense.com/licenses/${license}/`
} else {
  return ''
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Variables to store return values
  const licenseBadge = renderLicenseBadge();
  const licenseLink = renderLicenseLink();
  
  if (license) {
    return `
    ## License
    ${licenseBadge}
    ${licenseLink}
    `
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // The content of our file goes below
  return `
  # ${data.title}
  ## Table of Content
  -[Description](##description)
  -[Installation](##installation)
  -[Usage](##usage)
  -[How to Contribute](##how-to-contribute)
  -[Tests](##tests)

  ##Description
  ${data.description}

  ##Installation
  ${data.installInstruct}

  ##Usage
  ${data.usageInfo}

  ##How to Contribute
  ${data.contributionGuide}

  ##Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
