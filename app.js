let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número, en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Se uso para Activar y reiniciar el juego
        pararIntento(); // Se usa para llamar la funcion pararIntento
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        };
        intentos++;
        limpiarCaja();
    };
    return;
};

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // Se usa para llamar el id y dejar el campo limpio
};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; // Genera el número secreto aleatorio
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sorteron todos los números posibles.') // Muestra un mensaje si ya todos los numeros fueron sorteados
    } else {
         // Si el número esta incluido en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    };
};

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el números de intentos
    condicionesIniciales();
     // Deshabilitar el botón de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // Activa el botón de reinciar juego
     // Deshabilitar el botón de intento
     document.querySelector('#intentar').removeAttribute('disabled', 'true'); // desactiva el botón de intento
};

function pararIntento() {
    document.querySelector('#intentar').setAttribute('disabled', 'true'); // Se uso para activar el botón de intento
};

condicionesIniciales();