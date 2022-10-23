alert('Bienvenido a Torneos Americanos de Padel');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
const usuario = prompt('Ingrese su Nickname');

alert('Gracias ' + nombre + ' ' + apellido + ' por registrarte en Torneos Americanos');
alert('A continuacion: Todos los premios segun la categoria del torneo:')

let premioTorneos = 44000;
let costoInscripcion = 4400;

for (let i = 4; i >= 1; i--) {
    let resultado = premioTorneos * i;
    alert('Si el torneo es Categoria ' + i + ' el premio por pareja es de ' + Math.round(premioTorneos / i) + '. El costo de inscripcion es ' + Math.round(costoInscripcion / i) + ' por pareja.');
}

let categoria = Number(prompt('Ingrese su categoria (solo numero)'));  //Falta indicar que solo se pueda agregar valor numerico

while (categoria > 4) {
    alert('Categoria incorrecta, ingrese un valor entre 1 y 8.');
    categoria = Number(prompt('Ingrese su categoria (solo numero).'));
}

alert('Su categoria es ' + categoria + '. Estos son los torneos segun su categoria (aca va a aparecer una lista de torneos a elegir que voy a hacer con el swich)')

let torneoCat8A = 'La fabrica Padel'
let torneoCat8B = 'Matchpoint Padel'

let torneoCat7A = 'La fabrica Padel'
let torneoCat7B = 'Matchpoint Padel'

let torneoCat6A = 'La fabrica Padel'
let torneoCat6B = 'Matchpoint Padel'

let torneoCat5A = 'La fabrica Padel'
let torneoCat5B = 'Matchpoint Padel'

let torneoCat4A = 'La fabrica Padel'
let torneoCat4B = 'Matchpoint Padel'

let torneoCat3A = 'La fabrica Padel'
let torneoCat3B = 'Matchpoint Padel'

let torneoCat2A = 'La fabrica Padel'
let torneoCat2B = 'Matchpoint Padel'

let torneoCat1A = 'La fabrica Padel'
let torneoCat1B = 'Matchpoint Padel'

switch (categoria) {
    case 4:
        let torneoElegido = Number(prompt('Estos son los torneos de categoria 8 \n' + '1-' + torneoCat8A + '\n' + '2-' + torneoCat8B + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
        if (torneoElegido == 1) {
            torneoElegido = torneoCat8A;
        } else if (torneoElegido == 2) {
            torneoElegido = torneoCat8B;
        } else {
            while (torneoElegido != 1 || torneoElegido != 2) {
                torneoElegido = Number(prompt('Seleccione un torneo indicando la opcion 1 o 2'));
            }
        }
        break;
}

alert('Gracias por registrarse en el torneo categoria '+ categoria);







/*
let premioTorneos = 10000;
let costoInscripcion = 1000;

for (let i = 8; i >= 1; i--) {
    let resultado = premioTorneos * i;
    alert('Si el torneo es Categoria ' + i + ' el premio por pareja es de ' + premioTorneos * i + '. El costo de inscripcion es '+ costoInscripcion * i + '.');
}
*/

/*
if (categoria <= 8 && categoria >= 1) {
    alert('Tu categoria es correcta')
} else {
    alert('Ingrese una categoria correcta, entre 1 y 8')
}
*/
