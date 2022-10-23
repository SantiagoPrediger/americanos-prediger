alert('Bienvenido a Torneos Americanos de Padel');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
const usuario = prompt('Ingrese su Nickname');

alert('Gracias ' + nombre + ' ' + apellido + ' por registrarte en Torneos Americanos');
alert('A continuacion: Todos los premios segun la categoria del torneo:')

let premioTorneos = 88000;
let costoInscripcion = 8800;

for (let i = 8; i >= 1; i--) {
    let resultado = premioTorneos * i;
    alert('Si el torneo es Categoria ' + i + ' el premio por pareja es de ' + Math.round(premioTorneos/i) + '. El costo de inscripcion es '+ Math.round(costoInscripcion/i) + ' por pareja.');
}

let categoria = Number(prompt('Ingrese su categoria (solo numero)'));  //Falta indicar que solo se pueda agregar valor numerico

while (categoria > 8) {
    alert('Categoria incorrecta, ingrese un valor entre 1 y 8');
    categoria = Number(prompt('Ingrese su categoria (solo numero)'));
}

alert('Su categoria es ' + categoria + '. Estos son los torneos segun su categoria (aca va a aparecer una lista de torneos a elegir que voy a hacer con el swich)')









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
