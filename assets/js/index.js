// Check for saved theme preference or default to system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.toggle('dark', currentTheme === 'dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// Floating buttons functionality
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle
  const toggleButton = document.getElementById('darkmode-toggle');
  const icon = toggleButton.querySelector('i');

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
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  });

  // Scroll to top button
  const scrollTopButton = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  });

  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Download CV PDF button
  const printButton = document.getElementById('print-pdf');

  printButton.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'Hyunjoon_Park_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
