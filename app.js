document.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.go-top-container');
    if (window.scrollY > 200) {  // Adjust the scroll value as needed
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  });