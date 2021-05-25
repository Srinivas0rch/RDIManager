const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30){
        navigation.classList.add('animNav');
    } else {
        navigation.classList.remove('animNav');
    }
})