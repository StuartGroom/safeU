var images = [];

images[0] = ['/icons/glass-water-solid.svg'];
images[1] = ['/icons/whiskey-glass-solid.svg'];
images[2] = ['/icons/martini-glass-solid.svg'];
var index = 0;

function change() {
  document.getElementById("glassIcon").src = images[index];
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 3000);
}

window.onload = change();