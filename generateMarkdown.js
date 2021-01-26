// function to generate markdown for README
function generateMarkdown(data) {
  const markdown =`

  # Title 
    ${data.title}
  ## Description 
    ${data.description}
 
  ## Table of Contents
  * [Installation](#installation)
  * [Use](#use)
  * [Tests](#tests)
  * [Contributors](#contributors)

  ## Contributors 
    ${data.contributors}
  ## Use
    ${data.usage}
  ## Installation
    ${data.installation}
  ## Test 
    ${data.tests}
  ## License
    ${data.license}
  ## GitHub Links
    ${data.git}
    ${data.projectemail}
  ## Questions
    I am open for questions and feedback on this repository, please contact me directly at ${data.email}. 
    For other projects I've worked on, see [${data.github}](https://github.com/${data.git}/).
  `
  return markdown
}

module.exports = generateMarkdown;
