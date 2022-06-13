// setTimeout()
// Llama a una función luego de que transcurra un determinado tiempo

function miCallback() {
    console.log("Soy una callback");
}

setTimeout(miCallback, 5000); //Ejecuto después de 5 segundos la callback (1 sola vez)

//OTRA FORMA
miCallback = function () {
    console.log("Soy una callback");
}

setTimeout(miCallback, 5000);

//setInterval()

let miCallback3 = function() {
    console.log("Me ejecuto cada 3 segundos")
}
let intervalID = setInterval(miCallback3, 3000); //Ejecuto cada 3 segundos la callback

setTimeout() => clearInterval(intervalID, 6000); //Finalizo la ejecución


//----------------

function call(param1,param2) {
    console.log(param1);
    console.log(param2);
}
call(1,2)

let call2 = function(param1,param2) {
    console.log(param1 + param2);

}
call2(1,2)

let arrowFunction = (param2, param3) => {
    console.log("soy una arrow function");
}
arrowFunction(1,3)

//-----ejercicios-------

const a = [23, 45, 32];
const b = [12, 67, 75];

function encontrarGanador(puntajeJugadorA, puntajeJugadorB, callback) {
    let puntosJugadorA = 0;
    let puntosJugadorB = 0;

    for (let i = 0; i < puntajeJugadorA.length; i++) {
        if(puntajeJugadorA[i]> puntajeJugadorB[i]) {
            puntosJugadorA++;
        } else if(puntajeJugadorB[i] > puntajeJugadorA[i]) {
            puntosJugadorB++;
        }
    }
    callback(puntosJugadorA, puntosJugadorB);
}

function escribirGanadorEnConsola(jugador1, jugador2) {
    if(jugador1 > jugador2) {
        console.log( "Gano jugador 1");
    } else if(jugador2 > jugador1) {
        console.log( "Gano jugador 2");
    } else {
        console.log("Empate");
    }
}

encontrarGanador(a, b, escribirGanadorEnConsola);
encontrarGanador(a, b, (jugador1,jugador2) => console.table({jugador1,jugador2}));

//---- otro ejercicio -----

function crearURL(palabra) {
    return "http://www." + palabra ".com";
}
function procesar(arr, cb) {
    let res = [];
    for(const e of arr) {
        res.push(cb(e));
    }
    return res;
}
functio largoString(palabra) {
    return palabra.length;
}

console.log(procesar(["google", "yahoo"], crearURL));
// la funcion hace lo siguiente--> ["http://www.google.com", "http://www.yahoo.com"];

console.log(procesar(["casa", "hojarasca"], ))
// la funcion hace lo siguiente--> [4, 9];

// ----

var seconds = 0; 

function startCountDown(callback) {
    let intervalID = setInterval(function() {
        seconds++;
        callback();
    }, 1000);
}

startCountDown((intervalID) => {
    console.log(seconds);
    if(seconds == 0) {
        clearInterval(intervalID);
    }
});

// ----------

function suma(n1, n2) {
    return n1 + n2;
}
function resta(n1, n2) {
    return n1 - n2;
}
function multiplicacion(n1, n2) {
    return n1 * n2;
}
function division(n1, n2) {
    return n1 / n2;
}

function calculadora(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calculadora(2,3,suma));
console.log(calculadora(2,3,resta));
console.log(calculadora(2,3,multiplicacion));
console.log(calculadora(2,3,division));

console.log(calculadora(2, 3, (n1,n2) => Math.pow(n1, n2)));
console.log(calculadora("hola","chau", suma));

console.log(calculadora(2, 3, (n1,n2) => n1 + n2));
console.log(calculadora(2, 3, (n1,n2) => n1 - n2));
console.log(calculadora(2, 3, (n1,n2) => n1 * n2));
console.log(calculadora(2, 3, (n1,n2) => n1 / n2));

function saludar(nombre, callback) {
    callback(nombre);
}

var idioma = 'ES';
if(idioma == 'ES') {
    saludar("Julian", (nombre) => console.log(`Hola ${nombre}`));
} else {
    saludar("Julian", (name) => console.log(`Hello ${name}`));
}
