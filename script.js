function generateMarkdown() {
  // Get the value entered in the input field
  var fatherName = document.getElementById("fatherNameInput").value;

  // Create the markdown string
  var markdown = "My name is " + fatherName + ", I am your father";

  // Set the markdown string as the output in the textarea
  document.getElementById("markdownOutput").value = markdown;
}

// Prevent form submission on pressing Enter key
document
  .getElementById("markdownForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
