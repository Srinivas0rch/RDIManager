const cards = document.getElementsByClassName("card");
const images = document.getElementsByClassName("img-to-show");
var isClickInside = false;

for (let i = 0; i < cards.length; i++) {
    document.addEventListener("click", function (event) {
        const el = event.target.closest('.card');
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

const text = ['-Manager'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    
   
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    if (document.querySelector('.typing')) {
         document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, Math.floor(Math.random() * (800 - 200 + 1) + 200));
    }
   

}());