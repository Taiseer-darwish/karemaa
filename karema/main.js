// get Element From HTML
let front = document.getElementById("Front");
let back = document.getElementById("Back");

// open new tap when click at Front & Back butoon
front.addEventListener("click", function() {
  window.open("file:///G:/project/templet/templet/GLINT-/front-end-g/index.html", "_blank");
});

back.addEventListener("click", function() {
  window.open("file:///G:/project/templet/templet/GLINT-/back-end-g/index.html", "_blank");
});
