window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'blue';
    } else {
      nav.style.backgroundColor = '#333';
    }
  });
  