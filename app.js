alert('Bienvenido a Torneos Americanos de Padel');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
const categoria = Number(prompt('Ingrese su categoria (solo numero)'));  //Falta indicar que solo se pueda agregar valor numerico

if (categoria <= 8 && categoria >= 1) {
    alert('Tu categoria es correcta')
} else {
    alert('Ingrese una categoria correcta, entre 1 y 8')
}

alert('Gracias ' + nombre + ' ' + apellido + ' por registrarte en Torneos Americanos');


const premioTorneos = 10000;
const costoInscripcion = 1000;

for (let i = 8; i >= 1; i--) {
    let resultado = premioTorneos * i;
    alert('Si el torneo es Categoria ' + i + ' el premio por pareja es de ' + premioTorneos * i + '. El costo de inscripcion es '+ costoInscripcion * i + '.');
}



/*
let nombreUsuario = prompt('Ingrese su nombre');

if (nombreUsuario == 'Santiago'){
    alert('Hola ' + nombreUsuario);
}
*/
