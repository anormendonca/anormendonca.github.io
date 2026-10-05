document.addEventListener('DOMContentLoaded', () => {
  const scrapItems = document.querySelectorAll('.scrap-item');

  scrapItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.zIndex = '50';
    });

    item.addEventListener('mouseleave', () => {
      item.style.zIndex = '1';
    });
  });
});
