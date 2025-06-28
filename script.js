document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  } else {
    console.warn("Elemen burger atau navLinks tidak ditemukan di halaman ini.");
  }
});


// Efek muncul dari bawah saat discroll
const menuItems = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Hanya sekali tampil, lalu observer-nya dimatikan
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // Saat 20% dari elemen terlihat, animasi mulai
});

menuItems.forEach(item => {
  observer.observe(item);
});

