const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark-theme" ? "Light" : "Dark";
} else {
  // Default: dark mode
  body.classList.add("dark-theme");
  toggleBtn.textContent = "Light";
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
    toggleBtn.textContent = "Dark";
  } else {
    body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
    toggleBtn.textContent = "Light";
  }
});




