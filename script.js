// Preloader Handler
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 1000);
});

// Scroll Intersection Observer for smooth entrance animations
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade').forEach(element => {
    observer.observe(element);
  });
});

// Gallery Slider Logic
let currentSlideIndex = 0;

function updateGallerySlider() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

function nextGallerySlide() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.slide');
  const visibleSlides = window.innerWidth <= 900 ? 1 : 3;
  const maxIndex = slides.length - visibleSlides;

  if (currentSlideIndex < maxIndex) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateGallerySlider();
}

function prevGallerySlide() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.slide');
  const visibleSlides = window.innerWidth <= 900 ? 1 : 3;
  const maxIndex = slides.length - visibleSlides;

  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = maxIndex;
  }
  updateGallerySlider();
}

window.addEventListener('resize', updateGallerySlider);

// Modal Popup Handler
function openPopup(element, event) {
  if (event) event.stopPropagation();
  const popup = element.querySelector('.card-popup');
  const overlay = document.getElementById('popupOverlay');
  
  if (popup && overlay) {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    
    const closePopup = function() {
      popup.style.display = 'none';
      overlay.style.display = 'none';
      overlay.removeEventListener('click', closePopup);
      popup.removeEventListener('click', closePopup);
    };
    
    setTimeout(() => {
      overlay.addEventListener('click', closePopup);
      popup.addEventListener('click', closePopup);
    }, 10);
  }
}
