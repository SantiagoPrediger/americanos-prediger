alert('Bienvenido a Torneos Americanos de Padel');


const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
const equipo = prompt('Ingrese el nombre de su equipo');

alert('Gracias ' + nombre + ' ' + apellido + ' por registrarte en la plataforma de Torneos Americanos');
alert('A continuacion: Todos los premios segun la categoria del torneo:')

let premioTorneos = 44000;
let costoInscripcion = 4400;

for (let i = 4; i >= 1; i--) {
    let resultado = premioTorneos * i;
    alert('Si el torneo es Categoria ' + i + ' el premio por pareja es de ' + Math.round(premioTorneos / i) + '. El costo de inscripcion es ' + Math.round(costoInscripcion / i) + ' por pareja.');
}

let categoria = Number(prompt('Ingrese su categoria (solo numero)'));  //Falta indicar que solo se pueda agregar valor numerico

while (categoria > 4 || categoria == 0) {
    alert('Categoria incorrecta, ingrese un valor entre 1 y 4.');
    categoria = Number(prompt('Ingrese su categoria (solo numero).'));
}


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
        let torneoElegido = Number(prompt('Estos son los torneos de categoria 8 \n' + '1-' + torneoCat4A + '\n' + '2-' + torneoCat4B + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
        if (torneoElegido == 1) {
            torneoElegido = torneoCat4A;
        } else if (torneoElegido == 2) {
            torneoElegido = torneoCat4B;
        } else {
            while (torneoElegido != 1) {
                torneoElegido = Number(prompt('Seleccione un torneo indicando la opcion 1 o 2'));
            };
        }
        break;
}

alert('Gracias por registrar al equipo "' + equipo + '" en el torneo categoria '+ categoria + '.');







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
