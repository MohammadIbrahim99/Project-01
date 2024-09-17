//animasi muncul dari atas untuk halaman
window.addEventListener("load", function (e) {
  document.querySelector(".transform").classList.add("visible");
});

//animasi muncul dari bawah untuk contant
document.addEventListener("DOMContentLoaded", function () {
  //buat intersection observer
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  //pantau setiap elemen dengan kelas ghost
  document.querySelectorAll(".animasi").forEach(function (content) {
    observer.observe(content);
  });
});

//untuk hamburger

// togle class aktif untuk hamburger
const hamMenu = document.querySelector("#hamburger");
const nav = document.querySelector(".navbar");
//ketika hamburger di kilik
document.querySelector("#hamburger").onclick = (e) => {
  nav.classList.toggle("active");
  hamMenu.classList.toggle("active");
  e.preventDefault();
};
