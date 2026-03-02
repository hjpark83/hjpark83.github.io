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

  // Lightbox
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.innerHTML = '<div class="lightbox-content"><img id="lightbox-img" src="" alt=""><button id="lightbox-close">&times;</button></div>';
  document.body.appendChild(overlay);

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxContent = overlay.querySelector('.lightbox-content');
  const lightboxClose = document.getElementById('lightbox-close');

  // Copy protection: block right-click and drag on lightbox content
  lightboxContent.addEventListener('contextmenu', function(e) { e.preventDefault(); });
  lightboxContent.addEventListener('dragstart', function(e) { e.preventDefault(); });

  // Copy protection on card thumbnails
  document.querySelectorAll('.card-thumbnail img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) { e.preventDefault(); });
    img.addEventListener('dragstart', function(e) { e.preventDefault(); });
  });

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('.lightbox-trigger');
    if (trigger) openLightbox(trigger.dataset.src, trigger.dataset.alt);
  });

  lightboxClose.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
