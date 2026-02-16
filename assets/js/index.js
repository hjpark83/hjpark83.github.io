// Check for saved theme preference or default to system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.toggle('dark', currentTheme === 'dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('darkmode-toggle');
  const icon = toggleButton.querySelector('i');

  // Update icon based on current theme
  function updateIcon() {
    if (document.body.classList.contains('dark')) {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  }

  updateIcon();

  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');

    // Save preference to localStorage
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    updateIcon();
  });
});

// Abstract toggle functionality
function toggleAbstract(button) {
  button.classList.toggle('active');
  const content = button.nextElementSibling;

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}
