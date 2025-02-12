/*CRIOU UMA VARIAVEL E BUSCOU TODOS OS ELEMENTOS COM A CLASSE OPTION-IMAGE E ARMAZENOU NA VARIAVEL optionsImages*/
const optionsImages = document.querySelectorAll('.option-image');

const container = document.querySelector('.container');

const resultText = document.querySelector('.result-text');

const computerResult = document.querySelector('.computer-result img');

const userResult = document.querySelector('.user-result img');
/*criamos uma função chamada changeImage que será chamada quando o evento click for acionado*/

const computerImg = [
    './assets/pedra.png', 
    './assets/papel.png',
    './assets/tesoura.png'
]

/*
(r) pedra
(p) papel
(s) tesoura

pedra ganha de tesoura, perde para papel
papel ganha de pedra, perde para tesoura
tesoura ganha de papel, perde para pedra
*/

const winner = {
    RR: 'Empate',
    RP: 'Computador',
    RS: 'Usuário',
    PR: 'Usuário',
    PP: 'Empate',
    PS: 'Computador',
    SR: 'Computador',
    SP: 'Usuário',
    SS: 'Empate'
    
}

function changeImage(event) {

    const clickedImage = event.currentTarget
    const clickedIndex= Array.from(optionsImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.innerHTML = "..."

    userResult.src = computerResult.src = "./assets/pedra.png"
    
    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerImg[clickedIndex]
        const randomNumber = Math.floor(Math.random() * computerImg.length)
        computerResult.src = computerImg[randomNumber]

        const userValue = ['R', 'P', 'S'][clickedIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]

        const finalResult = userValue + computerValue
        resultText.innerHTML = userValue == computerValue ?'Empate': winner[finalResult] + " venceu"
        

    }, 2000)

}
/*criamos um loop que percorre todos os elementos da variavel optionsImages e adiciona um evento de click em cada um deles
event é uma varivel que representa o evento que foi acionado, e currentTarget é o elemento que acionou o evento
event.currentTarget é o elemento que acionou o evento, ou seja, o elemento que foi clicado*/

optionsImages.forEach(optionImage => { 
    optionImage.addEventListener('click', changeImage);
    });

    /*optionImage é o parametro que representa cada elemento da variavel optionsImages, e para cada elemento é adicionado um evento de click que chama a função changeImage*/