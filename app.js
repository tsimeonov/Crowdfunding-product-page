const open = document.querySelector(".openBtn");
const close = document.querySelector(".closeBtn");

const bookmark = document.querySelector("#bookmark");
const bookmarkLabel = document.querySelector("#bookmark p");

open.addEventListener("click", () => {
  document.getElementById("myNav").style.height = "100%";
});

close.addEventListener("click", () => {
  document.getElementById("myNav").style.height = "0%";
});

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        // elem.innerHTML = width + "%";
      }
    }
  }
}

// Bookmark Button

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("active");
  if (bookmark.classList.contains("active")) {
    bookmarkLabel.innerHTML = "Bookmarked";
  } else {
    bookmarkLabel.innerHTML = "Bookmark";
  }
});
