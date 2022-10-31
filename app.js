
/* function Torneo(lugar,categoria,dia) {
    this.lugar = lugar;
    this.categoria = categoria;
    this.dia = dia;
} */
let nombreEvento;
let nuevoLugar;
let nuevaCategoria;
let nuevoDia;
class Torneo {
    constructor(nombre, lugar,categoria,dia) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.categoria = categoria;
        this.dia = dia;
    }
}

const torneo1 = new Torneo('Ajpp', 'Matchpoint', 4 , 'Lunes');
const torneo2 = new Torneo('New Green Padel', 'La Fabrica', 3 , 'Martes');
const torneo3 = new Torneo('Yuka Sports', 'Flow Sports', 2 , 'Miercoles');
const torneo4 = new Torneo('Chiqui Torneo', 'Efecto Padel', 1 , 'Domingo');
const torneo5 = new Torneo(nombreEvento, nuevoLugar, nuevaCategoria , nuevoDia);


let ingreso = Number(prompt('Seleccione la opcion que desea realizar: \n\n1- Inscribirse en un torneo.\n2- Registrar un torneo.\n\nIngrese elegir ingrese el numero 1 o 2'));

if(ingreso === 1){
        // BIENVENIDA Y CREACION DE USUARIO - Asignacion de variables

    alert('Bienvenido a Torneos Americanos de Padel ​​​​​​😄\n\nAqui podras encontrar torneos todos los fines de semana.' );

    const nombre = prompt('Ingrese su nombre.');
    const apellido = prompt('Ingrese su apellido.');
    const equipo = prompt('Ingrese el nombre de su equipo. 🛡️​⚔️');

    alert('Gracias ' + nombre + ' ' + apellido + ' por registrarte en la plataforma \nde Torneos Americanos. 🤜​🤛​');
    alert('A continuacion: Todos los premios 🏆​ segun la categoria del torneo:')

    //INFORMACION SOBRE LOS TORNEOS - Ciclo con for + Operaciones (ciclo solo para practicar el uso del 'for')

    let premioTorneos = 44000;
    let costoInscripcion = 4400;

    for (let i = 4; i >= 1; i--) {
        let resultado = premioTorneos * i;
        alert('Si el torneo es Categoria ' + i + '\nPremio por pareja: ' + Math.round(premioTorneos / i) + '.🏆​ \n\nEl costo de inscripcion 📝 es ' + Math.round(costoInscripcion / i) + ' por pareja.');
    }

    // SELECCION DE CATEGORIA DE USUARIO - Ciclo con while

    let categoria = Number(prompt('Ingrese su categoria (solo numero).'));  
    while (categoria != 1 && categoria != 2 && categoria != 3 && categoria != 4) {
        alert('Categoria incorrecta, ingrese un valor entre 1 y 4.');
        categoria = parseInt(prompt('Ingrese su categoria (solo numero).'));
    }

    // INFORMACION DE TORNEOS - Asignaciond de variables

    let torneoCat4A = 'La fabrica Padel Categoria 4';
    let torneoCat4B = 'Matchpoint Padel Categoria 4';

    let torneoCat3A = 'Efecto Padel Categoria 3';
    let torneoCat3B = 'La Bandeja Padel Categoria 3';

    let torneoCat2A = 'Casa Blanca Padel Categoria 2';
    let torneoCat2B = 'Matchpoint Padel Categoria 2';

    let torneoCat1A = 'Almeria Padel Categoria 1';
    let torneoCat1B = 'Casa Blanca Padel Categoria 1';

    let torneoElegido;

    // FUNCION PARA CREAR LOS TORNEOS SEGUN CATEGORIA - Funcion combinada con un condicional, y un while para evitar valores incorrectos

    const torneosDisponibles = (torneoA, torneoB) => {
        torneoElegido = Number(prompt('Estos son los torneos de categoria ' + categoria + '\n\n' + '1-' + torneoA + '\n' + '2-' + torneoB + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
            if (torneoElegido == 1) {
                torneoElegido = torneoA;
            } else if (torneoElegido == 2) {
                torneoElegido = torneoB;
            } else {
                while (torneoElegido != 1 && torneoElegido != 2) {
                    torneoElegido = Number(prompt('OPCION INCORRECTA \n \nSeleccione un torneo indicando la opcion 1 o 2\n' + '\n' + '1-' + torneoA + '\n' + '2-' + torneoB + '\n'));}
                if (torneoElegido == 1) {
                    torneoElegido = torneoA;
                } else if (torneoElegido == 2) {
                    torneoElegido = torneoB;
                };
            }
    }

    // SELECCION DE TORNEO A PARTICIPAR - Ciclo con switch, combinado con una funcion.

    switch (categoria) {
        case 4:
            torneosDisponibles(torneoCat4A, torneoCat4B)
            break;
        case 3:
            torneosDisponibles(torneoCat3A, torneoCat3B)
            break;
        case 2:
            torneosDisponibles(torneoCat2A, torneoCat2B)
            break;
        case 1:
            torneosDisponibles(torneoCat1A, torneoCat1B)
            break;       
    }

    // SALUDO DE CONFIRMACION 

    alert('Felicitaciones!​🙌​ \n\nUsted se inscribio en el torneo de ' + torneoElegido + '🤩​.');

    alert('Gracias ' + nombre + ' por registrar al equipo "' + equipo + '" en el torneo \n"'+ torneoElegido + '". \n\nMucha suerte. 🍀​' );

} if (ingreso === 2) {
    alert('Bienvenido a Torneos Americanos, para registrar un torneo debera ingresar los datos a continuacion:')
    let nombreEvento = prompt('Ingrese el nombre del evento')
    let nuevoLugar = prompt('Nombre del club')
    let nuevaCategoria = Number(prompt('Ingrese la categoria del torneo(solo categorias del 1 al 4).'));  
    while (nuevaCategoria != 1 && nuevaCategoria != 2 && nuevaCategoria != 3 && nuevaCategoria != 4) {
        alert('Categoria incorrecta, ingrese un valor entre 1 y 4.');
        nuevaCategoria = parseInt(prompt('Ingrese su categoria (solo numero).'));
    };
    let nuevoDia = prompt('Ingrese el dia de la semana en el que se realizara el torneo')
    alert('Acaba de registrar un torneo en ' + torneo5.lugar + ' de Categoria ' + torneo5.categoria + '.' + 'El torneo se disputara el proximo ' + torneo5.dia);
} else {
    while (ingreso != 1 && ingreso != 2) {
        alert('Opcion incorrecta, ingrese un valor entre 1 y 2.');
        ingreso = Number(prompt('Si usted desea buscar un torneo seleccione la opcion 1, si desea registrar un torneo seleccione la opcion 2'));
    }
}

























/* const miPerfil = {

    nombre: 'Santiago',
    apellido: 'Prediger',
    edad: 28,
    categoria: 4

}

console.log(miPerfil.edad)



function MiPerfil(nombre, apellido, edad, categoria) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.categoria = categoria;
}

const perfil1 = new MiPerfil('Santiago', 'Prediger', 28, 4);
const perfil2 = new MiPerfil('Natasha', 'Ruiz', 26, 3);
console.log(perfil1)
console.log(perfil2) */













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




/* switch (categoria) {
    case 4:
        torneoElegido = Number(prompt('Estos son los torneos de categoria 4 \n' + '1-' + torneoCat4A + '\n' + '2-' + torneoCat4B + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
        if (torneoElegido == 1) {
            torneoElegido = torneoCat4A;
        } else if (torneoElegido == 2) {
            torneoElegido = torneoCat4B;
        } else {
            while (torneoElegido != 1 && torneoElegido != 2) {
                torneoElegido = Number(prompt('OPCION INCORRECTA \n \nSeleccione un torneo indicando la opcion 1 o 2\n' + '\n' + '1-' + torneoCat4A + '\n' + '2-' + torneoCat4B + '\n'));}
            if (torneoElegido == 1) {
                torneoElegido = torneoCat4A;
            } else if (torneoElegido == 2) {
                torneoElegido = torneoCat4B;
            };
        }
        break;
    case 3:
        torneoElegido = Number(prompt('Estos son los torneos de categoria 3 \n' + '1-' + torneoCat3A + '\n' + '2-' + torneoCat3B + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
        if (torneoElegido == 1) {
            torneoElegido = torneoCat3A;
        } else if (torneoElegido == 2) {
            torneoElegido = torneoCat3B;
        } else {
            while (torneoElegido != 1 && torneoElegido != 2) {
                torneoElegido = Number(prompt('Seleccione un torneo indicando la opcion 1 o 2'));}
            if (torneoElegido == 1) {
                torneoElegido = torneoCat3A;
            } else if (torneoElegido == 2) {
                torneoElegido = torneoCat3B;
            };
        }
        break;
    case 2:
        torneoElegido = Number(prompt('Estos son los torneos de categoria 2 \n' + '1-' + torneoCat2A + '\n' + '2-' + torneoCat2B + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
        if (torneoElegido == 1) {
            torneoElegido = torneoCat2A;
        } else if (torneoElegido == 2) {
            torneoElegido = torneoCat2B;
        } else {
            while (torneoElegido != 1 && torneoElegido != 2) {
                torneoElegido = Number(prompt('Seleccione un torneo indicando la opcion 1 o 2'));}
            if (torneoElegido == 1) {
                torneoElegido = torneoCat2A;
            } else if (torneoElegido == 2) {
                torneoElegido = torneoCat2B;
            };
        }
        break;
    case 1:
        torneoElegido = Number(prompt('Estos son los torneos de categoria 1 \n' + '1-' + torneoCat1A + '\n' + '2-' + torneoCat1B + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
        if (torneoElegido == 1) {
            torneoElegido = torneoCat1A;
        } else if (torneoElegido == 2) {
            torneoElegido = torneoCat1B;
        } else {
            while (torneoElegido != 1 && torneoElegido != 2) {
                torneoElegido = Number(prompt('Seleccione un torneo indicando la opcion 1 o 2'));}
            if (torneoElegido == 1) {
                torneoElegido = torneoCat1A;
            } else if (torneoElegido == 2) {
                torneoElegido = torneoCat1B;
            };
        }
        break;       
}  */