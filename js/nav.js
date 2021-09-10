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

function focusFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  arrowDown = document.querySelector('.arrowDownOne');
  arrowDown.style.display = 'none';
  arrowUp = document.querySelector('.arrowUpOne');
  arrowUp.style.display = 'block';
}

function outFunction() {
  setTimeout(function () {
    document.getElementById("myDropdown").classList.remove('show');
    arrowDown = document.querySelector('.arrowDownOne');
    arrowDown.style.display = 'block';
    arrowUp = document.querySelector('.arrowUpOne');
    arrowUp.style.display = 'none';
  }, 100);
}

function focusFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  arrowDown = document.querySelector('.arrowDownTwo');
  arrowDown.style.display = 'none';
  arrowUp = document.querySelector('.arrowUpTwo');
  arrowUp.style.display = 'block';
}

function outFunction2() {
  setTimeout(function () {
    document.getElementById("myDropdown2").classList.remove("show");
    arrowDown = document.querySelector('.arrowDownTwo');
    arrowDown.style.display = 'block';
    arrowUp = document.querySelector('.arrowUpTwo');
    arrowUp.style.display = 'none';
  }, 100);
}

function focusFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  arrowDown = document.querySelector('.arrowDownThree');
  arrowDown.style.display = 'none';
  arrowUp = document.querySelector('.arrowUpThree');
  arrowUp.style.display = 'block';
}

function outFunction3() {
  setTimeout(function () {
    document.getElementById("myDropdown3").classList.remove("show");
    arrowDown = document.querySelector('.arrowDownThree');
    arrowDown.style.display = 'block';
    arrowUp = document.querySelector('.arrowUpThree');
    arrowUp.style.display = 'none';
  }, 100);
}

function focusFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
  arrowDown = document.querySelector('.arrowDownFour');
  arrowDown.style.display = 'none';
  arrowUp = document.querySelector('.arrowUpFour');
  arrowUp.style.display = 'block';
}

function outFunction4() {
  setTimeout(function () {
    document.getElementById("myDropdown4").classList.remove("show");
    arrowDown = document.querySelector('.arrowDownFour');
    arrowDown.style.display = 'block';
    arrowUp = document.querySelector('.arrowUpFour');
    arrowUp.style.display = 'none';
  }, 100);
}

function focusFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
  arrowDown = document.querySelector('.arrowDownFive');
  arrowDown.style.display = 'none';
  arrowUp = document.querySelector('.arrowUpFive');
  arrowUp.style.display = 'block';
}

function outFunction5() {
  setTimeout(function () {
    document.getElementById("myDropdown5").classList.remove("show");
    arrowDown = document.querySelector('.arrowDownFive');
    arrowDown.style.display = 'block';
    arrowUp = document.querySelector('.arrowUpFive');
    arrowUp.style.display = 'none';
  }, 100);
}