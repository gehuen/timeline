const timelineRows = document.querySelectorAll('.timeline-row');

function animateOnScroll() {
  timelineRows.forEach((row) => {
    const rowTop = row.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (rowTop < windowHeight * 0.75) {
      row.classList.add('visible');
    }
  });
}
animateOnScroll();

window.addEventListener('scroll', animateOnScroll);