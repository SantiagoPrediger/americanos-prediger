

class Torneo {
    constructor(nombre, lugar, categoria, dia, precio, photo) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.categoria = categoria;
        this.dia = dia;
        this.precio = precio;
        this.photo = photo;
    }
}

// ARMADO DE OBJETOS


const torneo1 = new Torneo('Ajpp', 'Matchpoint', 4 , 'Lunes', 1000, '../img/tor1.jpg');
const torneo2 = new Torneo('New Green Padel', 'La Fabrica', 3 ,  'Martes', 2000, '../img/tor2.jpg');
const torneo3 = new Torneo('Yuka Sports', 'Flow Sports', 2 ,  'Miercoles', 3000 ,'../img/tor3.jpg');
const torneo4 = new Torneo('Chiqui Torneo', 'Efecto Padel', 1 , 'Jueves', 4000, '../img/tor4.jpg');
const torneo5 = new Torneo('Ajpp', 'Matchpoint', 1 , 'Viernes', 1000, '../img/tor5.jpg');
const torneo6 = new Torneo('New Green Padel', 'La Fabrica', 2 , 'Domingo', 2000, '../img/tor6.jpg');
const torneo7 = new Torneo('Yuka Sports', 'Flow Sports', 3 , 'Sabado', 3000, '../img/tor7.jpg');
const torneo8 = new Torneo('Chiqui Torneo', 'Efecto Padel', 4 , 'Domingo', 4000, '../img/tor8.jpg');



const listaTorneos = [torneo1, torneo2, torneo3, torneo4, torneo5, torneo6, torneo7, torneo8, ]
console.log(listaTorneos);

const valorInscripcion = [4000, 3000, 2000, 1000]
console.log(valorInscripcion);

const premioTorneo = [80000, 60000, 40000, 20000]
console.log(premioTorneo)



class Producto {
    constructor(photo, nombre, precio) {
        this.photo = photo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto('../img/cubregrips.jpg', 'Cubregrips', 800); 
const producto2 = new Producto('../img/gorra.jpg', 'Gorra', 5000); 
const producto3 = new Producto('../img/protectores.jpg', 'Protectores', 1200); 

const listaProductos = [producto1, producto2, producto3]