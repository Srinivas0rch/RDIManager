import ScrollReveal from 'scrollreveal'

const sr = ScrollReveal();

sr.reveal('.selected', {
    delay : 300,
    origin: 'left',
    distance: '150px',
});

sr.reveal('.card', {
    delay : 300,
    origin: 'left',
    distance: '150px',
}, 800);

sr.reveal('.cardOne', {
    delay : 300,
    distance: '100px',
});

sr.reveal('.cardTwo', {
    delay : 500,
    distance: '100px',
});

sr.reveal('.cardThree', {
    delay : 700,
    distance: '100px',
});

sr.reveal('#blt', {
    delay: 300,
    origin: 'right',
    distance: '150px',
});

sr.reveal('#brt', {
    delay: 300,
    origin: 'left',
    distance: '150px',
});

sr.reveal('#blf', {
    delay: 300,
    origin: 'left',
    distance: '150px',
});

sr.reveal('#brf', {
    delay: 300,
    origin: 'right',
    distance: '150px',
});