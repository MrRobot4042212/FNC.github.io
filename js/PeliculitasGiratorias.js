const totalCartas = 12;
const cartasDisponibles = ['../img/memorama/pelicula1.jpg', '../img/memorama/pelicula2.jpg', '../img/memorama/pelicula3.jpg', '../img/memorama/pelicula4.jpg', '../img/memorama/pelicula5.jpg', '../img/memorama/pelicula6.jpg'];
let cartas = [];
let cartasSeleccionadas = [];
let movimientoActual = 0;
let intentosActuales = 0;

let plantillaCarta = '<div class="carta"><div class="back"></div><div class="face"></div></div>';

alert("Si te has olvidado la contraseña, debes mejorar tu memoria!");

function barajarCartas() {
    let cartasAleatorias = cartasDisponibles.concat(cartasDisponibles); // Duplicar las cartas para formar parejas
    cartasAleatorias.sort(() => Math.random() - 0.5); // Mezclar las cartas aleatoriamente
    return cartasAleatorias;
}

function activar(e) {
    if (movimientoActual < 2) {
        if ((!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== e.target) && !e.target.classList.contains('active')) {
            e.target.classList.add('active');
            cartasSeleccionadas.push(e.target);

            if (++movimientoActual == 2) {
                intentosActuales++;
                document.querySelector('#stats').innerHTML = intentosActuales + ' intentos';

                if (cartasSeleccionadas[0].querySelectorAll('.face')[0].style.backgroundImage === cartasSeleccionadas[1].querySelectorAll('.face')[0].style.backgroundImage) {
                    cartasSeleccionadas = [];
                    movimientoActual = 0;
                    setTimeout(comprobarFinJuego, 1000); // Retraso para mostrar la última tarjeta antes de comprobar el fin del juego
                } else {
                    setTimeout(() => {
                        cartasSeleccionadas[0].classList.remove('active');
                        cartasSeleccionadas[1].classList.remove('active');
                        cartasSeleccionadas = [];
                        movimientoActual = 0;
                    }, 600);
                }
            }
        }
    }
}

function comprobarFinJuego() {
    if (document.querySelectorAll('.carta:not(.active)').length === 0) {
        alert('¡Felicidades! Has completado el juego en ' + intentosActuales + ' intentos. Ya estás listo para no volver a olividar la contraseña, registrate de nuevo!');
        window.location.href = 'registro.html'; // Redireccionar a la página de login
    }
}

function reiniciarJuego() {
    movimientoActual = 0;
    intentosActuales = 0;
    cartasSeleccionadas = [];
    document.querySelector('#stats').innerHTML = '0 intentos';
    cartasAleatorias = barajarCartas();
    cartas.forEach((carta, index) => {
        carta.querySelectorAll('.face')[0].style.backgroundImage = `url(${cartasAleatorias[index]})`;
    });
}

for (let i = 0; i < totalCartas; i++) {
    let div = document.createElement('div');
    div.innerHTML = plantillaCarta;
    cartas.push(div);
    document.querySelector('#juego').append(cartas[i]);
    cartas[i].querySelectorAll('.face')[0].style.backgroundImage = `url(${cartasDisponibles[i]})`;
    cartas[i].querySelectorAll('.carta')[0].addEventListener('click', activar);
}

reiniciarJuego();
