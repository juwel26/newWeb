
// navbar function

const toggle = document.getElementById('three-dought');
const menu = document.getElementById('nav-list');

toggle.addEventListener('click', function () {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  }
  else {
    menu.style.display = 'block'
  }
})

// whtasapp btn function 

const whtasapp = document.getElementById('whbtn');
const whtasappImg = document.getElementById('whimg');

whtasapp.addEventListener('click', function () {
  if (whtasappImg.style.display == 'block') {
    whtasappImg.style.display = 'none'
    
  }
  else {
    whtasappImg.style.display = 'block'
  }
})
