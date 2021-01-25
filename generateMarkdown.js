// function to generate markdown for README
function generateMarkdown(data) {
  const markdown =`

  # Title 
    ${data.title}
  ## Description 
    ${data.description}
  ## Contributors 
    ${data.contributors}
  ## Test 
    ${data.tests}
  ## License
    ${data.license}
  ## GitHub
    ${data.github}
  ## GitHub Links
    ${data.git}
    ${data.projectemail}
  `
  return markdown
}

module.exports = generateMarkdown;
