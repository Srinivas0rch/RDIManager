function focusFM() {
    let cardFm = document.querySelector('.cardOne');
    let imgFm = document.querySelector('.imgFM');
    if (focusFM) {
        imgFm.classList.add('imgAnim');
    }
    imgFm.style.display = 'block';
    cardFm.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
}

function outFocusFM() {
    let cardFm = document.querySelector('.cardOne');
    let imgFm = document.querySelector('.imgFM');
    imgFm.style.display = 'none';
    cardFm.style.boxShadow = 'none';
}

function focusST() {
    let cardSt = document.querySelector('.cardTwo');
    let imgSt = document.querySelector('.imgST');
    let cardFm = document.querySelector('.cardOne');
    let imgFm = document.querySelector('.imgFM');
    imgFm.style.display = 'none';
    cardFm.style.boxShadow = 'none';
    if (focusST) {
        imgSt.classList.add('imgAnim');
    }
    imgSt.style.display = 'block';
    cardSt.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
}

function outFocusST() {
    let cardSt = document.querySelector('.cardTwo');
    let imgSt = document.querySelector('.imgST');
    let cardFm = document.querySelector('.cardOne');
    let imgFm = document.querySelector('.imgFM');
    imgSt.style.display = 'none';
    cardSt.style.boxShadow = 'none';
}

function focusGF() {
    let cardGf = document.querySelector('.cardThree');
    let imgGf = document.querySelector('.imgGF');
    let cardFm = document.querySelector('.cardOne');
    let imgFm = document.querySelector('.imgFM');
    imgFm.style.display = 'none';
    cardFm.style.boxShadow = 'none';
    if (focusGF) {
        imgGf.classList.add('imgAnim');
    }
    imgGf.style.display = 'block';
    cardGf.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
}

function outFocusGF() {
    let cardGf = document.querySelector('.cardThree');
    let imgGf = document.querySelector('.imgGF');
    let cardFm = document.querySelector('.cardOne');
    let imgFm = document.querySelector('.imgFM');
    imgGf.style.display = 'none';
    cardGf.style.boxShadow = 'none';
}

