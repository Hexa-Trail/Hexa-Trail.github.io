// Caroussel management
document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const indicatorsContainer = document.querySelector('.indicators');
    let index = 0;
    let interval;
  
    // Crée les points indicateurs
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
        restartInterval();
      });
      indicatorsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('.dot');
  
    function updateCarousel() {
      const slideWidth = slidesContainer.clientWidth;
      slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  
    function nextSlide() {
      index = (index + 1) % images.length;
      updateCarousel();
    }
  
    function restartInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 7000);
    }
  
    // Initialise
    updateCarousel();
    interval = setInterval(nextSlide, 7000);
  
    // Resize pour ajuster le slide si l'écran change
    window.addEventListener('resize', updateCarousel);
  });
  
