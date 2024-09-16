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

//ketika form sudah terkirim dan kembalinya akan mereset isi form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

//membuat pesan peringatan ketika tidak mengisi input

document.getElementById("myform").addEventListener("submit", function (event) {
  // Ambil nilai dari input dengan id 'first' dan 'last'
  let firstInput = document.getElementById("first").value;
  let lastInput = document.getElementById("last").value;
  let emailInput = document.getElementById("email").value;

  let isEror = false;

  // Ambil elemen untuk pesan error
  let firstNameEror = document.getElementById("firstNameEror");
  let lastNameEror = document.getElementById("lastNameEror");
  let emailEror = document.getElementById("emailEror");

  //First
  if (firstInput === "") {
    firstNameEror.style.display = "inline"; //menampilkan pesan peringatan
    isEror = true; //set eror menjadi true
  } else {
    firstNameEror.style.display = "none"; //sembunyikan pesan
  }

  //Last

  if (lastInput === "") {
    lastNameEror.style.display = "inline"; //menampilkan pesan peringatan
    isEror = true; //set eror menjadi true
  } else {
    lastNameEror.style.display = "none"; //sembunyikan pesan
  }

  //Email

  if (emailInput === "") {
    emailEror.style.display = "inline"; //menampilkan pesan peringatan
    isEror = true; //set eror menjadi true
  } else {
    emailEror.style.display = "none"; //sembunyikan pesan
  }

  //jika ada eror pesan tidak terkirim
  if (isEror) {
    event.preventDefault();
  }
});
