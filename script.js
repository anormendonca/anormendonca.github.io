// Google Drive Links for Reports
const reportLinks = {
  g9: 'https://drive.google.com/file/d/1oZya6UrianhHwpaz97p2ARbL6AdducIE/preview',
  g10: 'https://drive.google.com/file/d/11lavWog1DA3vGptl4vB7K5GiTzFKcqQs/preview',
  g11: 'https://drive.google.com/file/d/1kUDYSCrsC_-6n1zZF9QliUA_KntgMexL/preview'
};

// Modal Lightbox Opener
function openModal(reportKey) {
  const modal = document.getElementById('reportModal');
  const iframe = document.getElementById('modalFrame');
  
  if (reportLinks[reportKey]) {
    iframe.src = reportLinks[reportKey];
    modal.style.display = 'flex';
  }
}

// Modal Lightbox Closer
function closeModal() {
  const modal = document.getElementById('reportModal');
  const iframe = document.getElementById('modalFrame');
  
  modal.style.display = 'none';
  iframe.src = '';
}

// Interactive sound or tilt effects on scrap items
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scrap-item');

  items.forEach(item => {
    // Add subtle random rotation variation on load
    const currentTransform = window.getComputedStyle(item).transform;
    
    item.addEventListener('mouseenter', () => {
      item.style.zIndex = '50';
    });

    item.addEventListener('mouseleave', () => {
      item.style.zIndex = '1';
    });
  });
});
