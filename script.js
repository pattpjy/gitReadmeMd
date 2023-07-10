let selectedFrontEndFrameworks = [];
let selectedBackEndFrameworks = [];

const yourName = document.getElementById("yourName");
const gitHubName = document.getElementById("gitHubUserName");
const projectName = document.getElementById("projectNameInput");
const projDetail = document.getElementById("projectDetail");
const liveSite = document.getElementById("liveSite");
const localHost = document.getElementById("localHost");
const roadMap = document.getElementById("roadMap");
const instructions = `1. Fork the Repo from the [Repository](https://github.com/${gitHubName}/${projectName})
2. Clone the repo
   \`\`\`sh
   git clone git@github.com:${gitHubName}/${gitHubName}.git
   \`\`\`
3. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
4. Run npm start
   \`\`\`sh
   npm start
   \`\`\`
5. Use this link to open in Browser
   \`\`\`sh
   ${localHost}
   \`\`\``;

function generateMarkdown() {
  // Create the markdown string

  var markdown = `# ${projectName.value} ## Contributors: [![${yourName.value}][${yourName.value}-badge]][${yourName.value}-url]
  
  ## Report Bug [Here][issue-url]
  
  <details open>
  <summary>Table of Contents</summary>
  
  1. [About The Project](#about-the-project)
     - Built With
  2. [Getting Started](#getting-started)
     - Installation
     - How to use
  3. [Architecture](#architecture)
  4. [Road Map](#road-map)
  
  </details>
  
  ## About The Project
  ${projDetail.value}

  Live site link [Display Text](${liveSite.value})
  
  [Back to Top](#project-name)
  
  ### Built With
  
  [Back to Top](#project-name)
  
  ## Getting Started
  
  ### Installation
  
  ${instructions}
  
  
  [Back to Top](#project-name)
 
  ## Architecture
  
  The Todo List app follows a client-server architecture, utilizing the following technologies:
  
  - **Frontend**: ${selectedFrontEndFrameworks}
  - **Backend**: ${selectedFrontEndFrameworks}
  
  ## Roadmap
  
  The following features and enhancements are planned for the future releases of the Todo List app:
  
 ${roadMap.value}
  
  [Back to Top](#project-name)
  
  See the [open issue][issue-url] for a full list of proposed features (and known issues).
  
  [Back to Top](#project-name)
  
  ## Future Additions
  
  - need update
  
  [Back to Top](#project-name)
  
  [${yourName.value}-badge]: https://img.shields.io/badge/-${yourName.value}-brightgreen
  [${yourName.value}-url]: https://github.com/${gitHubName.value}
  [issue-url]: https://github.com/${gitHubName.value}/${projectName.value}/issues
`;

  // Set the markdown string as the output in the textarea
  var textarea = document.getElementById("markdownOutput");
  textarea.classList.remove("hidden");
  textarea.value = markdown;
}

// Prevent form submission on pressing Enter key
document
  .getElementById("markdownForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function getSelectedFrameworks(type) {
  // Get all selected frameworks

  const frameworksArray = null;
  if (type === "frontend") {
    frameworksArrays = selectedFrontEndFrameworks;
  } else if (type === "backend") {
    frameworksArray = selectedBackEndFrameworks;
  }

  var checkboxes = document.getElementsByName(type);

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      frameworksArray.push(checkbox.value);
    }
  });

  // Output the selected frameworks
  console.log(frameworksArray);
}
