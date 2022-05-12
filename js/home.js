window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const cards = document.getElementsByClassName("card");
const images = document.getElementsByClassName("img-to-show");
var isClickInside = false;

for (let i = 0; i < cards.length; i++) {
  document.addEventListener("click", function (event) {
    const el = event.target.closest(".card");
    cards[i].classList.remove("selected");
    images[i].classList.remove("show");
    images[i].classList.remove("imgAnim");

    if (el) {
      el.classList.add("selected");
      const numberOfImg = el.id.split("-")[1];
      const imgToShow = document.getElementById(`img-${numberOfImg}`);
      imgToShow.classList.add("show");
      imgToShow.classList.add("imgAnim");
    } else {
      cards[0].classList.add("selected");
      images[0].classList.add("show");
      images[0].classList.add("imgAnim");
    }
  });
}

const text = ["-Manager"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  if (document.querySelector(".typing")) {
    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }

    setTimeout(type, Math.floor(Math.random() * (800 - 200 + 1) + 200));
  }
})();

const cardes = document.getElementsByClassName("carde");
const imagees = document.getElementsByClassName("img-to-see");
var isClickInside = false;

for (let i = 0; i < cards.length; i++) {
  document.addEventListener("click", function (event) {
    const el = event.target.closest(".carde");
    cardes[i].classList.remove("selection");
    imagees[i].classList.remove("see");
    imagees[i].classList.remove("imgAnims");

    if (el) {
      el.classList.add("selection");
      const numberOfImgs = el.id.split("-")[1];
      const imgToSee = document.getElementById(`imgs-${numberOfImgs}`);
      imgToSee.classList.add("see");
      imgToSee.classList.add("imgAnims");
    } else {
      cardes[0].classList.add("selection");
      imagees[0].classList.add("see");

      imagees[0].classList.add("imgAnims");
    }
  });
}
