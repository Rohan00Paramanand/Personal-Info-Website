const aboutButton = document.getElementById('About');
const qualsButton = document.getElementById('Quals');
const projectsButton = document.getElementById('Projects');
const container = document.getElementById('Container');
const close = document.getElementById('close');

const aboutText = document.getElementById('Ab');
const qualsText = document.getElementById('Qu');
const projectsText = document.getElementById('Pr');


aboutButton.addEventListener('click', ()=> {
    aboutText.classList.add('active');
    container.classList.add('active');
    qualsText.classList.remove('active');
    projectsText.classList.remove('active');
});

qualsButton.addEventListener('click', ()=> {
    qualsText.classList.add('active');
    container.classList.add('active');
    aboutText.classList.remove('active');
    projectsText.classList.remove('active');
});

projectsButton.addEventListener('click', ()=> {
    projectsText.classList.add('active');
    container.classList.add('active');
    aboutText.classList.remove('active');
    qualsText.classList.remove('active');
});

close.addEventListener('click', ()=> {
    container.classList.remove('active');
});