const image = document.getElementById("your-image-id");
const popup = document.getElementById("popup");

image.addEventListener("mouseenter", function() {
  popup.style.display = "block";
  popup.style.left = (image.offsetLeft + image.width + 10) + "px";
  popup.style.top = (image.offsetTop + (image.height / 2) - (popup.offsetHeight / 2)) + "px";
});

image.addEventListener("mouseleave", function() {
  popup.style.display = "none";
});
