import Modal from './modal.js';

const modal = Modal();

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        //Abrir modal
        modal.open();
    });
});
