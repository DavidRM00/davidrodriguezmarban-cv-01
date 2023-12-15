const miDiv1 = document.getElementById('miDiv1');
const miDiv2 = document.getElementById('miDiv2');
const miDiv3 = document.getElementById('miDiv3');
const miDiv4 = document.getElementById('miDiv4');
const miDiv5 = document.getElementById('miDiv5');
const miDiv6 = document.getElementById('miDiv6');
const miDiv7 = document.getElementById('miDiv7');
const miDiv8 = document.getElementById('miDiv8');
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
let ampliado1 = false;
let ampliado2 = false;
let ampliado3 = false;
let ampliado4 = false;


miDiv2.addEventListener('click', () => {
    if (!ampliado1) {
        miDiv1.classList.add('ampliado');
        texto1.classList.add('mostrado');
    } else {
        miDiv1.classList.remove('ampliado');
        texto1.classList.remove('mostrado');
    }
    ampliado1 = !ampliado1;
});

miDiv4.addEventListener('click', () => {
    if (!ampliado2) {
        miDiv3.classList.add('ampliado');
        texto2.classList.add('mostrado');
    } else {
        miDiv3.classList.remove('ampliado');
        texto2.classList.remove('mostrado');
    }
    ampliado2 = !ampliado2;
});

miDiv6.addEventListener('click', () => {
    if (!ampliado3) {
        miDiv5.classList.add('ampliado');
        texto3.classList.add('mostrado');
    } else {
        miDiv5.classList.remove('ampliado');
        texto3.classList.remove('mostrado');
    }
    ampliado3 = !ampliado3;
});

miDiv8.addEventListener('click', () => {
    if (!ampliado4) {
        miDiv7.classList.add('ampliado');
        texto4.classList.add('mostrado');
    } else {
        miDiv7.classList.remove('ampliado');
        texto4.classList.remove('mostrado');
    }
    ampliado4 = !ampliado4;
});