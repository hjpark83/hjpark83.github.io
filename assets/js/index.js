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

  // Section search & filter
  document.querySelectorAll('[data-section-filter]').forEach(function(filterEl) {
    var collapsibleContent = filterEl.closest('.collapsible-content');
    var cards = Array.from(collapsibleContent.querySelectorAll('.publication-card'));
    if (cards.length < 2) return;

    // Collect years and tags from card data attributes / DOM
    var years = new Set();
    var tags = new Set();
    cards.forEach(function(card) {
      var year = card.dataset.year;
      if (!year) {
        var venueEl = card.querySelector('.card-venue');
        if (venueEl) {
          var m = venueEl.textContent.match(/\b(20\d\d)\b/);
          if (m) year = m[1];
        }
        card.dataset.year = year || '';
      }
      if (year) years.add(year);
      card.querySelectorAll('.badge').forEach(function(badge) {
        tags.add(badge.textContent.trim());
      });
    });

    // Build filter UI
    var html = '<div class="filter-bar">';
    html += '<input type="text" class="filter-search" placeholder="검색 (제목, 저자, 학회...)">';
    if (years.size > 0) {
      html += '<div class="filter-group">';
      html += '<button class="filter-btn year-btn active" data-year="">전체 연도</button>';
      Array.from(years).sort().reverse().forEach(function(y) {
        html += '<button class="filter-btn year-btn" data-year="' + y + '">' + y + '</button>';
      });
      html += '</div>';
    }
    if (tags.size > 0) {
      html += '<div class="filter-group">';
      html += '<button class="filter-btn tag-btn active" data-tag="">전체 유형</button>';
      Array.from(tags).forEach(function(t) {
        html += '<button class="filter-btn tag-btn" data-tag="' + t.replace(/"/g, '&quot;') + '">' + t + '</button>';
      });
      html += '</div>';
    }
    html += '</div>';
    filterEl.innerHTML = html;

    var activeYear = '';
    var activeTag = '';
    var searchText = '';

    function applyFilters() {
      cards.forEach(function(card) {
        var matchYear = !activeYear || card.dataset.year === activeYear;
        var cardTags = Array.from(card.querySelectorAll('.badge')).map(function(b) { return b.textContent.trim(); });
        var matchTag = !activeTag || cardTags.indexOf(activeTag) !== -1;
        var matchSearch = !searchText || card.textContent.toLowerCase().indexOf(searchText) !== -1;
        card.style.display = (matchYear && matchTag && matchSearch) ? '' : 'none';
      });
      if (collapsibleContent && collapsibleContent.style.maxHeight) {
        collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
      }
    }

    filterEl.addEventListener('click', function(e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      if (btn.classList.contains('year-btn')) {
        activeYear = btn.dataset.year;
        filterEl.querySelectorAll('.year-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        applyFilters();
      } else if (btn.classList.contains('tag-btn')) {
        activeTag = btn.dataset.tag;
        filterEl.querySelectorAll('.tag-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        applyFilters();
      }
    });

    filterEl.querySelector('.filter-search').addEventListener('input', function() {
      searchText = this.value.trim().toLowerCase();
      applyFilters();
    });
  });
});
