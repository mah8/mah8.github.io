const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

function switchImages() {
  if (image1.style.display === 'none') {
    image1.style.display = 'block';
    image2.style.display = 'none';
  } else {
    image1.style.display = 'none';
    image2.style.display = 'block';
  }
}

setInterval(switchImages, 2000);