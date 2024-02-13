const totalCards = 12;
const availableCards = ['A', 'K', 'Q', 'J'];
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;

let cardTemplate = '<div class="carta"><div class="back"></div><div class="face"></div></div>';

alert("Si te has olvidado la contraseña, debes mejorar tu memoria!")


function activate(e) {
    if (currentMove < 2) {

        if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active')) {
            e.target.classList.add('active');
            selectedCards.push(e.target);

            if (++currentMove == 2) {

                currentAttempts++;
                document.querySelector('#stats').innerHTML = currentAttempts + ' intentos';

                if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML) {
                    selectedCards = [];
                    currentMove = 0;
                    checkEndGame();
                } else {
                    setTimeout(() => {
                        selectedCards[0].classList.remove('active');
                        selectedCards[1].classList.remove('active');
                        selectedCards = [];
                        currentMove = 0;
                    }, 600);
                }
            }
        }
    }
}

function randomValue() {
    let rnd = Math.floor(Math.random() * totalCards * 0.5);
    let values = valuesUsed.filter(value => value === rnd);
    if (values.length < 2) {
        valuesUsed.push(rnd);
    } else {
        randomValue();
    }
}

function getFaceValue(value) {
    let rtn = value;
    if (value < availableCards.length) {
        rtn = availableCards[value];
    }
    return rtn;
}

function checkEndGame() {
    if (document.querySelectorAll('.carta:not(.active)').length === 0) {
        alert('¡Felicidades! Has completado el juego en ' + currentAttempts + ' intentos.');
        resetGame();
    }
}

function resetGame() {
    currentMove = 0;
    currentAttempts = 0;
    valuesUsed = [];
    selectedCards = [];
    document.querySelector('#stats').innerHTML = '0 intentos';
    document.querySelectorAll('.carta').forEach(card => {
        card.classList.remove('active');
    });
    cards.forEach((card, index) => {
        randomValue();
        card.querySelectorAll('.face')[0].innerHTML = getFaceValue(valuesUsed[index]);
    });
}

for (let i = 0; i < totalCards; i++) {
    let div = document.createElement('div');
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#juego').append(cards[i]);
    randomValue();
    cards[i].querySelectorAll('.face')[0].innerHTML = getFaceValue(valuesUsed[i]);
    cards[i].querySelectorAll('.carta')[0].addEventListener('click', activate);
}
