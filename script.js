// HEader toggle

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

// Typing effect

let typed = new Typed(".auto-input", {
  strings: ["", "Developer.", "Designer."],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});
