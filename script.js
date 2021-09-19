let order = [];
let clickedOrder = [];
let score = 0;


//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');



let playGame = () => {
    alert(`Bem vindo! Iniciando um novo jogo!`)
    order = [];
    clickedOrder = [];
    score = 0;
    console.log('score inciial:', score)
    nextLevel()
}

let nextLevel = () => {
    score++;
    shuffleOrder();
    console.log('score:', score)
}

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for (let i in order) {
        let elementColor = createColorElement(order[i]);        
        lightColor(elementColor, Number(i) + 1)
    }
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }
    else if(color == 1) {
        return red;
    }
    else if(color == 2) {
        return yellow;
    }
    else if(color == 3) {
        return blue;
    }
}

let lightColor = (element, number) => {   
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    }, number)
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}


let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando próximo nível!`)
        nextLevel()
    }
}


let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê Perdeu! Clique em OK para iniciar novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)






playGame()

