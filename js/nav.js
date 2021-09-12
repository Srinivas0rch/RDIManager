const navigation = document.querySelector('header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 30) {
    navigation.classList.add('animNav');
  } else {
    navigation.classList.remove('animNav');
  }
})

var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

const dropButton = document.getElementsByClassName('dropButton');

for (let i = 0; i < dropButton.length; i++) {
  dropButton[i].addEventListener('click', function (event) {
    const el = event.target.closest('.dropButton');
    const dropdownId = el.id.split('-')[1];
    document.getElementById(`myDropdown${dropdownId}`).classList.toggle("show");
  })
}