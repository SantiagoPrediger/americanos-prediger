

class Torneo {
    constructor(nombre, lugar, categoria, dia, precio, photo, id) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.categoria = categoria;
        this.dia = dia;
        this.precio = precio;
        this.photo = photo;
        this.id = id;
    }
}

// ARMADO DE OBJETOS


const torneo1 = new Torneo('Ajpp', 'Matchpoint', 4 , 'Lunes', 1000, '../img/tor1.jpg',1);
const torneo2 = new Torneo('New Green Padel', 'La Fabrica', 3 ,  'Martes', 2000, '../img/tor2.jpg',2);
const torneo3 = new Torneo('Yuka Sports', 'Flow Sports', 2 ,  'Miercoles', 3000 ,'../img/tor3.jpg',3);
const torneo4 = new Torneo('Chiqui Torneo', 'Efecto Padel', 1 , 'Jueves', 4000, '../img/tor4.jpg',4);
const torneo5 = new Torneo('Ajpp', 'Matchpoint', 1 , 'Viernes', 1000, '../img/tor5.jpg',5);
const torneo6 = new Torneo('New Green Padel', 'La Fabrica', 2 , 'Domingo', 2000, '../img/tor6.jpg',6);
const torneo7 = new Torneo('Yuka Sports', 'Flow Sports', 3 , 'Sabado', 3000, '../img/tor7.jpg',7);
const torneo8 = new Torneo('Chiqui Torneo', 'Efecto Padel', 4 , 'Domingo', 4000, '../img/tor8.jpg',8);



const listaTorneos = [torneo1, torneo2, torneo3, torneo4, torneo5, torneo6, torneo7, torneo8, ]
console.log(listaTorneos);

const valorInscripcion = [4000, 3000, 2000, 1000]
console.log(valorInscripcion);

const premioTorneo = [80000, 60000, 40000, 20000]
console.log(premioTorneo)



class Producto {
    constructor(photo, nombre, precio, id) {
        this.photo = photo;
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}

const producto1 = new Producto('../img/cubregrips.jpg', 'Cubregrips', 800, 'a'); 
const producto2 = new Producto('../img/gorra.jpg', 'Gorra', 5000, 'b'); 
const producto3 = new Producto('../img/protectores.jpg', 'Protectores', 1200, 'c'); 

const listaProductos = [producto1, producto2, producto3]