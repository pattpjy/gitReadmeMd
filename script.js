let selectedFrontEndFrameworks = [];
let selectedBackEndFrameworks = [];

const yourName = document.getElementById("yourName");
const gitHubName = document.getElementById("gitHubUserName");
const projectName = document.getElementById("projectNameInput");
const projDetail = document.getElementById("projectDetail");
const liveSite = document.getElementById("liveSite");
const localHost = document.getElementById("localHost");
const roadMap = document.getElementById("roadMap");
const errorMessage = document.getElementById("errorMessage");
const textarea = document.getElementById("markdownOutput");
const copyOutputBox = document.getElementById("copyOutputBox");

const projectNameHash = wordToHashtag(projectName.value);

const instructions = `1. Fork the Repo from the [Repository](https://github.com/${gitHubName.value}/${projectName.value})
2. Clone the repo
   \`\`\`sh
   git clone git@github.com:${gitHubName.value}/${gitHubName.value}.git
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

// ---------- Create the markdown string ----------
function generateMarkdown() {
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
  - **Backend**: ${selectedBackEndFrameworks}
  
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

  //check if any required fields have failed validation
  const requiredFields = document.querySelectorAll("input[required]");
  let hasInvalidRequiredField = false;
  for (let i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].checkValidity()) {
      hasInvalidRequiredField = true;
      break;
    }
  }

  // do not generate output if there's invalid field
  if (hasInvalidRequiredField) {
    errorMessage.classList.remove("hidden");
    return;
  }
  //---add loader---
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  // Set a timeout to simulate the markdown generation process
  setTimeout(() => {
    const textarea = document.getElementById("markdownOutput");
    copyOutputBox.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    textarea.classList.remove("hidden");
    textarea.value = markdown;

    // Hide the loader spinner
    loader.style.display = "none";
  }, 2000); // Adjust the timeout value as needed
}

// Prevent form submission on pressing Enter key
document
  .getElementById("markdownForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function getSelectedFrameworks(type) {
  const frameworksArray = [];
  const checkboxes = document.getElementsByName(type);
  const beMessage = document.getElementById("beFrameworkBtnMsg");
  const feMessage = document.getElementById("feFrameworkBtnMsg");

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      frameworksArray.push(checkbox.value);
    }
  });

  if (type === "frontend") {
    selectedFrontEndFrameworks = frameworksArray;
    feMessage.classList.remove("hidden");
  } else if (type === "backend") {
    selectedBackEndFrameworks = frameworksArray;
    beMessage.classList.remove("hidden");
  }
  return frameworksArray;
}

// parse word into hashtag
function wordToHashtag(word) {
  return `#${word.toLowerCase().replaceAll(" ", "-")}`;
}

// copy text to clipboard
var clipboard = new ClipboardJS(".copyOutput");

clipboard.on("success", function (e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);

  e.clearSelection();
});

clipboard.on("error", function (e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
});
