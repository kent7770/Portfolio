// 🌙 Dark/Light Theme Toggle
const themeBtn = document.getElementById("theme-toggle");

// Check if dark mode is saved in localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "☀️ Light Mode";
}

// Theme toggle functionality
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// ✏️ Editable About Section
const editBtn = document.getElementById("edit-btn");
const aboutText = document.getElementById("about-text");
const statusMsg = document.getElementById("status-msg");

// Load saved text from localStorage
if (localStorage.getItem("aboutContent")) {
  aboutText.textContent = localStorage.getItem("aboutContent");
}

// Edit button functionality
editBtn.addEventListener("click", () => {
  if (aboutText.isContentEditable) {
    // Currently in edit mode, save the changes
    aboutText.contentEditable = "false";
    editBtn.textContent = "Edit";
    localStorage.setItem("aboutContent", aboutText.textContent);
    statusMsg.textContent = "✅ Changes saved!";
    statusMsg.style.color = "green";
    
    // Clear status message after 3 seconds
    setTimeout(() => {
      statusMsg.textContent = "";
    }, 3000);
  } else {
    // Currently in view mode, switch to edit mode
    aboutText.contentEditable = "true";
    aboutText.focus();
    editBtn.textContent = "Save";
    statusMsg.textContent = "Click Save when done editing";
    statusMsg.style.color = "#666";
  }
});
