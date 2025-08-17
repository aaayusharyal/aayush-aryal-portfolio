const toggleText = document.getElementById('theme-toggle');
const body = document.body;

toggleText.addEventListener('click', () => {
  if(body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    toggleText.textContent = "Dark";
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    toggleText.textContent = "Light";
  }
});

