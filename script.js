/*CRIOU UMA VARIAVEL E BUSCOU TODOS OS ELEMENTOS COM A CLASSE OPTION-IMAGE E ARMAZENOU NA VARIAVEL optionsImages*/
const optionsImages = document.querySelectorAll('.option-image');

/*criamos uma função chamada changeImage que será chamada quando o evento click for acionado*/

function changeImage(event) {
    const clickedImage = event.currentTarget

}
/*criamos um loop que percorre todos os elementos da variavel optionsImages e adiciona um evento de click em cada um deles
event é uma varivel que representa o evento que foi acionado, e currentTarget é o elemento que acionou o evento
event.currentTarget é o elemento que acionou o evento, ou seja, o elemento que foi clicado*/

optionsImages.forEach(optionImage => { 
    optionImage.addEventListener('click', changeImage);
    });

    /*optionImage é o parametro que representa cada elemento da variavel optionsImages, e para cada elemento é adicionado um evento de click que chama a função changeImage*/