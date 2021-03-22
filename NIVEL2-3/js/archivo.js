const botonNumeros = document.getElementsByName('numero');
const botonOperac = document.getElementsByName('operacion');
const botonIgual = document.getElementsByName('igual')[0];
const botonBorrar = document.getElementsByName('borrar')[0];
let resultado = document.getElementById('result');

let opeActual = '';
let opeAnterior = '';
let operacion = undefined;
let finishOperation = false;

//eventos
botonNumeros.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (!finishOperation){
                agregarNumero(boton.innerText);
                return;
            }
            else{
                finishOperation = false;
                clear();
                actualizarDisplay();
                agregarNumero(boton.innerText);
            }

        });
});

botonOperac.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText);

    })
});

botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
    finishOperation = true;
});

botonBorrar.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});

//métodos
const clear = () => {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

const agregarNumero = (num) => {
    if (opeAnterior != '') clear;
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

const selectOperacion = (op) => {
    // if (opeActual === '') return;
    if (opeAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

const actualizarDisplay = () => {
    result.value = opeActual;
}

const calcular = () => {
    let calculo;
    let anterior = parseFloat(opeAnterior);
    let actual = parseFloat(opeActual);



    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+': calculo = anterior + actual;
            break;
        case '-': calculo = anterior - actual;
            break;
        case '*': calculo = anterior * actual;
            break;
        case '/':
            if (actual === 0 || actual === ' ') {
                alert('no se puede dividir por cero');
                return;
            }
            else {
                calculo = anterior / actual;
            }
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}




