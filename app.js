


// DECLARACION DE VARIABLES

let nombreEvento;
let nuevoLugar;
let nuevaCategoria;
let nuevoDia;
let categoria;
let torneoElegido;
let volverInicio;


// ARMADO DE CLASES 

class Torneo {
    constructor(nombre, lugar, categoria, dia, photo) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.categoria = categoria;
        this.dia = dia;
        this.photo = photo;
    }
}

// ARMADO DE OBJETOS


const torneo1 = new Torneo('Ajpp', 'Matchpoint', 4 , 'Lunes', './img/tor1');
const torneo2 = new Torneo('New Green Padel', 'La Fabrica', 3 , 'Martes', './img/tor2');
const torneo3 = new Torneo('Yuka Sports', 'Flow Sports', 2 , 'Miercoles', './img/tor3');
const torneo4 = new Torneo('Chiqui Torneo', 'Efecto Padel', 1 , 'Jueves', './img/tor4');
const torneo5 = new Torneo('Ajpp', 'Matchpoint', 1 , 'Viernes', './img/tor5');
const torneo6 = new Torneo('New Green Padel', 'La Fabrica', 2 , 'Domingo', './img/tor6');
const torneo7 = new Torneo('Yuka Sports', 'Flow Sports', 3 , 'Sabado', './img/tor7');
const torneo8 = new Torneo('Chiqui Torneo', 'Efecto Padel', 4 , 'Domingo', './img/tor8');


// ARRAYS

const listaTorneos = [torneo1, torneo2, torneo3, torneo4, torneo5, torneo6, torneo7, torneo8, ]
console.log(listaTorneos);

const valorInscripcion = [4000, 3000, 2000, 1000]
console.log(valorInscripcion);

const premioTorneo = [80000, 60000, 40000, 20000]
console.log(premioTorneo)

// FUNCIONES

const valorVacio = (valor) => {
    while (valor == "" || valor ==" "){
        alert("Debe ingresar un valor")
        valor = prompt("Intente nuevamente").toLowerCase()
    }
}


// INICIO DE CICLO // CONDICIONAL (Para elegir ruta de "jugador" u "organizador")

// WHILE para poder utilizar el torneo creado como opcion al inscribirse en un torneo.

while (volverInicio != 'no'){
    let ingreso = Number(prompt('Seleccione la opcion que desea realizar: \n\n1- Registrar un torneo.\n2- Inscribirse en un torneo.\n\nIngrese elegir ingrese el numero 1 o 2'));


if(ingreso === 1){

    alert('Bienvenido a Torneos Americanos, para registrar un torneo debera ingresar los datos a continuacion:')

    //ASIGNACION DE VARIABLES
    nombreEvento = prompt('Ingrese el nombre del evento');
        valorVacio(nombreEvento);
    nuevoLugar = prompt('Nombre del club');
        valorVacio(nuevoLugar);
    nuevaCategoria = Number(prompt('Ingrese la categoria del torneo(solo categorias del 1 al 4).'));  
    while (nuevaCategoria != 1 && nuevaCategoria != 2 && nuevaCategoria != 3 && nuevaCategoria != 4) {
        alert('Categoria incorrecta, ingrese un valor entre 1 y 4.');
        nuevaCategoria = parseInt(prompt('Ingrese su categoria (solo numero del 1 al 4).'));
    };
    nuevoDia = prompt('Ingrese el dia de la semana en el que se realizara el torneo');
        valorVacio(nuevoDia);
    
    // CREACION DE OBJETO - AGREGADO A UN ARRAY // Permite utilizar el torneo en el ciclo de inscripcion 
    const torneo9 = new Torneo(nombreEvento, nuevoLugar, nuevaCategoria , nuevoDia);
    listaTorneos.push(torneo9);
    alert('Acaba de registrar el torneo ' + torneo9.nombre + ' de Categoria ' + torneo9.categoria + ' en ' + torneo9.lugar + '.' + ' \nEl evento se disputara el proximo ' + torneo9.dia + '.');
    alert('En total se encuentran registrados ' + listaTorneos.length + ' eventos.')
    
    let verListaTorneosRegistrados = prompt('Desea ver la lista de torneos?\n\n SI/NO').toLowerCase();
    if(verListaTorneosRegistrados == 'si'){
        listaTorneos.forEach((torneo) => {
            alert('Torneo ' + torneo.nombre + ' en el club ' + torneo.lugar + ' de categoria ' + torneo.categoria + ' el dia ' + torneo.dia)
        })
    } 
    let quitarEvento = prompt('Desea eliminar el evento recien creado?\n\nSI/NO').toLowerCase();
        valorVacio(quitarEvento);
    if (quitarEvento == 'si'){
        listaTorneos.pop()
        alert('Evento eliminado.')
        alert('En total se encuentran registrados ' + listaTorneos.length + ' eventos.')
    } else {
        alert('Muchas gracias por registrar su evento.');
    }
    volverInicio = prompt('Desea volver al inicio? \n\nSI/NO')     


} else if (ingreso === 2) {
        // BIENVENIDA Y CREACION DE USUARIO - Asignacion de variables

        alert('Bienvenido a Torneos Americanos de Padel ​​​​​​😄\n\nAqui podras encontrar torneos todos los fines de semana.' );

        let nombre = prompt('Ingrese su nombre.');
        valorVacio(nombre);
        let apellido = prompt('Ingrese su apellido.');
        valorVacio(apellido);
        let equipo = prompt('Ingrese el nombre de su equipo. 🛡️​⚔️');
        valorVacio(equipo);
    
        alert('Gracias ' + nombre + ' ' + apellido + ' por registrarte en la plataforma \nde Torneos Americanos. 🤜​🤛​');
        alert('A continuacion: Todos los premios 🏆​ y costos de inscripcion 1segun la categoria del torneo:')
    
        //INFORMACION SOBRE LOS TORNEOS -
    
        alert('El valor de inscripcion por categoria es:\n\nCategoria 4: $' + valorInscripcion[3] + '\nCategoria 3: $' + valorInscripcion[2] + '\nCategoria 2: $' + valorInscripcion[1] + '\nCategoria 1: $' + valorInscripcion[0])
    
        alert('El Premio del torneo por categoria es:\n\nCategoria 4: $' + premioTorneo[3] + '\nCategoria 3: $' + premioTorneo[2] + '\nCategoria 2: $' + premioTorneo[1] + '\nCategoria 1: $' + premioTorneo[0])
    
    
    
        // VER TORNEOS DISPONIBLES // Opcion de ver los torneos ya disponibles con un for each recorriendo el array de torneos.
    
        let verListaTorneo = prompt('Desea ver la lista de torneos disponibles?\n\n SI/NO').toLowerCase();
        if(verListaTorneo == 'si'){
            
            listaTorneos.forEach((torneo) => {
                alert('Torneo ' + torneo.nombre + ' en el club ' + torneo.lugar + ' de categoria ' + torneo.categoria + ' el dia ' + torneo.dia)
            })
    
            // PRIMERO HABIA PROBADO CON EL FOR OF, LUEGO CON EL AVANCE DEL CURSO CAMBIE A FOR EACH
    
            /* for (const torneo of listaTorneos) {
                alert('Torneo ' + torneo.nombre + ' en el club ' + torneo.lugar + ' de categoria ' + torneo.categoria + ' el dia ' + torneo.dia)
            } */
    
        } else {
            alert('Puede continuar con su inscripcion')
        }
    
        // SELECCION DE CATEGORIA DE USUARIO - Ciclo con while
    
        categoria = Number(prompt('Ingrese su categoria (solo numero).'));  
        while (categoria != 1 && categoria != 2 && categoria != 3 && categoria != 4) {
            alert('Categoria incorrecta, ingrese un valor entre 1 y 4.');
            categoria = parseInt(prompt('Ingrese su categoria (solo numero).'));
        }
    
        // RESULTADOS DE TORNEOS SEGUN CATEGORIA
    
        const torneosPorCategoria = listaTorneos.filter((torneo) => torneo.categoria === categoria)
    
        // FUNCION PARA ELEGIR TORNEOS DISPONIBLES 

        const torneosDisponibles = (torneoA, torneoB) => {
            torneoElegido = Number(prompt('Estos son los torneos de categoria ' + categoria + '.\nElija entre la opcion 1 y 2 para inscribirse.\n\n1)   Evento: ' +  torneoA.nombre + '\n      Club: ' + torneoA.lugar + '\n      Categoria: ' + torneoA.categoria + '\n      Dia: ' + torneoA.dia + '\n\n2)   Evento: ' +  torneoB.nombre + '\n      Club: ' + torneoB.lugar + '\n      Categoria: ' + torneoB.categoria + '\n      Dia: ' + torneoB.dia));
                while (torneoElegido != 1 && torneoElegido != 2) {
                    torneoElegido = Number(prompt('OPCION INCORRECTA \n \nSeleccione un torneo indicando la opcion 1 o 2\n' + '\n' + '1-' + torneoA.nombre + '\n' + '2-' + torneoB.nombre + '\n'));}
                if (torneoElegido == 1) {
                    torneoElegido = torneoA;
                } else if (torneoElegido == 2) {
                    torneoElegido = torneoB;
                };
        }
    
        torneosDisponibles(torneosPorCategoria[0], torneosPorCategoria [1]);
    
        // FUNCION PARA INDICAR PRECIO/PREMIO SEGUN CATEGORIA (serviria para abonar la inscripcion)

        const inscripcionPremio = (valorInscripcionFun, premioTorneoFun) => {
            alert('Felicitaciones!​🙌​ \n\nUsted se inscribio en el torneo: \n\n' + 'Evento: ' +  torneoElegido.nombre + '\nClub: ' + torneoElegido.lugar + '\nCategoria: ' + torneoElegido.categoria + '\nDia: ' + torneoElegido.dia + '\n\nEl costo de inscripcion es $' + valorInscripcionFun + '.\nEl premio del torneo es $' + premioTorneoFun + '.');
            }
        
        switch (categoria) {
            case 4:
                inscripcionPremio(valorInscripcion[3], premioTorneo[3])
                break;
            case 3:
                inscripcionPremio(valorInscripcion[2], premioTorneo[2])
                break;
            case 2:
                inscripcionPremio(valorInscripcion[1], premioTorneo[1])
                break;
            case 1:
                inscripcionPremio(valorInscripcion[0], premioTorneo[0])
                break;       
        }
        
    
        alert('Gracias ' + nombre + ' por registrar al equipo "' + equipo + '" en el torneo \n"'+ torneoElegido.nombre + '". \n\nMucha suerte. 🍀​' );
        
     
    volverInicio = prompt('Desea volver al inicio? \n\nSI/NO')    

    
} else {
    while (ingreso != 1 && ingreso != 2) {
        alert('Opcion incorrecta, ingrese un valor entre 1 y 2.');
        ingreso = Number(prompt('Si usted desea buscar un torneo seleccione la opcion 1, si desea registrar un torneo seleccione la opcion 2'));
    }
}

}

















































    // SALUDO DE CONFIRMACION

    /* alert('Felicitaciones!​🙌​ \n\nUsted se inscribio en el torneo de ' + torneoElegido.nombre + '🤩​.\n\n'); */


   // INFORMACION DE TORNEOS - Asignaciond de variables

 /*    let torneoCat4A = 'La fabrica Padel Categoria 4';
    let torneoCat4B = 'Matchpoint Padel Categoria 4';

    let torneoCat3A = 'Efecto Padel Categoria 3';
    let torneoCat3B = 'La Bandeja Padel Categoria 3';

    let torneoCat2A = 'Casa Blanca Padel Categoria 2';
    let torneoCat2B = 'Matchpoint Padel Categoria 2';

    let torneoCat1A = 'Almeria Padel Categoria 1';
    let torneoCat1B = 'Casa Blanca Padel Categoria 1';
 */
    

    // FUNCION PARA CREAR LOS TORNEOS SEGUN CATEGORIA - Funcion combinada con un condicional, y un while para evitar valores incorrectos

    /* const torneosDisponibles = (torneoA, torneoB) => {
        torneoElegido = Number(prompt('Estos son los torneos de categoria ' + categoria + '\n\n' + '1-' + torneoA + '\n' + '2-' + torneoB + '\n \n Elija el torneo en el que quiere participar seleccionando la opcion 1 o 2'));
            while (torneoElegido != 1 && torneoElegido != 2) {
                torneoElegido = Number(prompt('OPCION INCORRECTA \n \nSeleccione un torneo indicando la opcion 1 o 2\n' + '\n' + '1-' + torneoA + '\n' + '2-' + torneoB + '\n'));}
            if (torneoElegido == 1) {
                torneoElegido = torneoA;
            } else if (torneoElegido == 2) {
                torneoElegido = torneoB;
            };
    } */

    // SELECCION DE TORNEO A PARTICIPAR - Ciclo con switch, combinado con una funcion.

  /*   switch (categoria) {
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
    } */


   /*  let premioTorneos = 44000;
    let costoInscripcion = 4400;

    for (let i = 4; i >= 1; i--) {
        let resultado = premioTorneos * i;
        alert('Si el torneo es Categoria ' + i + '\nPremio por pareja: ' + Math.round(premioTorneos / i) + '.🏆​ \n\nEl costo de inscripcion 📝 es ' + Math.round(costoInscripcion / i) + ' por pareja.');
    } */





    /* const torneosDisponibles = (torneoA, torneoB) => {
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
    } */



/*
let nuevoUsuario = prompt("Ingrese Usuario").toLowerCase()
while (nuevoUsuario === ""){
    alert("Debe ingresar un usuario")
    nuevoUsuario = prompt("Ingrese Usuario").toLowerCase()
}
*/


/* function Torneo(lugar,categoria,dia) {
    this.lugar = lugar;
    this.categoria = categoria;
    this.dia = dia;
} */




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