document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});

// Efek muncul dari bawah saat discroll
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll('.menu-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // tampil sekali saja
      }
    });
  }, {
    threshold: 0.2
  });

  menuItems.forEach(item => observer.observe(item));
});
