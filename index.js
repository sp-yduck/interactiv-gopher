const stalker = document.getElementById("stalker");

document.addEventListener("mousemove", function (e) {
  stalker.style.transform = "translate(" + e.clientX + "px, 0)";
});
