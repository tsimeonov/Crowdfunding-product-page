const open = document.querySelector(".openBtn");
const close = document.querySelector(".closeBtn");

open.addEventListener("click", () => {
  document.getElementById("myNav").style.height = "100%";
});

close.addEventListener("click", () => {
  document.getElementById("myNav").style.height = "0%";
});
