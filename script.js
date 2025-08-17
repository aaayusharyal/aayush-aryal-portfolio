const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check if a theme is saved in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "Light" : "Dark";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Dark";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Light";
  }
});



