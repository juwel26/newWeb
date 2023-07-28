
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