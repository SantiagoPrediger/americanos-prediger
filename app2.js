let botonInscribir = document.querySelectorAll('.botonInscribirse')
const detalleTorneo = document.querySelector('#detalleTorneo')
const detalleCosto = document.querySelector('#detalleCosto')

// NOMBRE USUARIO

const nombreUser = localStorage.getItem('nombreUsuario')
const apellidoUser = localStorage.getItem('apellidoUsuario')
const emailUser = localStorage.getItem('emailUsuario')
console.log(nombreUser, apellidoUser, emailUser)

const bienvenida = document.querySelector('#nombreUser')

bienvenida.innerHTML = `
    <h2 class="tituloUser">Bienvenido ${nombreUser} y ${apellidoUser}</h2>
    <p class="email">Su email registrado es <a href="#">${emailUser}</a></p>
`

// CERRAR SESION

const logout = document.querySelector('#logout')

const logoutUser = () => {
    localStorage.removeItem('nombreUsuario')
    localStorage.removeItem('apellidoUsuario')
    localStorage.removeItem('emailUsuario')
    bienvenida.innerHTML = `
    <h2 class="tituloUser">Ingrese sus datos nuevamente</h2>
`
}

logout.addEventListener('click', logoutUser)



// CREACION DE TORNEOS 

const torneos = document.querySelector('#torneos')

function renderizarProductos(arrayTorneos) {

    torneos.innerHTML = "";

    arrayTorneos.forEach((torneo) => {
        const nuevoTorneo = document.createElement('div')
        nuevoTorneo.className = 'cardContainer'
        nuevoTorneo.innerHTML = `
        <div class="img">
            <img src="${torneo.photo}" class="imgTorneo" alt="flyer torneo ${torneo.nombre}">
        </div>
        <div class="infoTorneo">
            <h2>${torneo.nombre}</h2>
            <div class="datosTorneo">
                <i class="fa-solid fa-map-pin"></i><span class="lugar">${torneo.lugar}</span><br>
                <i class="fa-solid fa-sort"></i><span class="categoria">Categoria ${torneo.categoria}</span><br>
                <i class="fa-solid fa-calendar-days"></i><span class="dia">Dia ${torneo.dia}</span><br>
                <i class="fa-solid fa-dollar-sign"></i></i><span class="precio"> Precio ${torneo.precio}</span></div>
            <button class="botonInscribirse" id="${torneo.id}"><a href="#" >Inscribirse</a></button>
        </div>
    
        `
        torneos.append(nuevoTorneo)
    })
    actualizarBotonInscribir();
}
renderizarProductos(listaTorneos);

// PRODUCTOS ACCESORIOS

const productos = document.querySelector('#productos')

listaProductos.forEach((producto) => {
    const nuevoProducto = document.createElement('div')
    nuevoProducto.className = 'productContainer'
    nuevoProducto.innerHTML = `
        <img src="${producto.photo}" alt="cubregrips">
        <h3>${producto.nombre}</h3>
        <p>1 unidad</p>
        <p>Precios: $${producto.precio}</p>
        <button class="agregarProducto" id="${producto.id}">Agregar</button>
    `
    productos.append(nuevoProducto)
})


// SELECTOR DE CATEGORIAS Y CLUBES


let filtroClubes = document.querySelector('#club')
let filtroCategorias = document.querySelector('#cat')


const clubes = () => {
    listaTorneos.map(club => {
        filtroClubes.innerHTML += `<option value="${club.lugar}">${club.lugar}</option>`
    })
}
clubes()

const categ = () => {
    listaTorneos.map(cate => {
        filtroCategorias.innerHTML += `<option value="${cate.categoria}">${cate.categoria}</option>`
    })
}
categ()




const filtrar = document.querySelector('#filtrarResultados')

const filtrarResultados = (e) => {
    e.preventDefault()
    const clubes = filtroClubes.value;
    const categorias = filtroCategorias.value;
    console.log(clubes);
    console.log(categorias);

    const resultados = listaTorneos.filter(torneo => torneo.lugar + torneo.categoria === clubes + categorias)
    console.log(resultados)
    renderizarProductos(resultados);
}

filtrar.addEventListener('click', filtrarResultados)


// LIMPIAR PARAMETROS DE BUSQUEDA TORNEOS

const limpiarFiltros = document.querySelector('#limpiar')

const renderizar = () => {
    renderizarProductos(listaTorneos)
}
limpiarFiltros.addEventListener('click', renderizar) 


// AGREGAR TORNEO AL CARRITO




function actualizarBotonInscribir() {
    botonInscribir = document.querySelectorAll('.botonInscribirse')
    botonInscribir.forEach((boton) => {
        boton.addEventListener('click', torneoPagar);
    })
}

const torneoEnCarrito = []
const productosEnCarrito = [];

function torneoPagar(e) {
    const idBoton = e.currentTarget.id;
    console.log(idBoton)
    const torneoInscripto = listaTorneos.find((torneo) => torneo.id == idBoton)
    console.log(torneoInscripto)

    if(productosEnCarrito.some(torneo => torneo.id == idBoton)) {
        alert('usted no se puede inscribir mas de una vez')
    } else {
        torneoEnCarrito.push(torneoInscripto)
    }
    
    const detalleDetalle = document.createElement('div')
    detalleDetalle.className = 'infoContainer'
    detalleDetalle.innerHTML = `
        <p>Inscripcion al torneo:${torneoEnCarrito[0].nombre}</p>
        <p>En el club:${torneoEnCarrito[0].lugar} </p>
        <p>El dia:${torneoEnCarrito[0].dia} </p>
        <p>Jugador 1:${nombreUser}</p>
        <p>Jugador 2:${apellidoUser}</p>
        <p>Costo inscripcion:$${torneoEnCarrito[0].precio}</p>
    `
    detalleTorneo.append(detalleDetalle)
    localStorage.setItem('torneoEnCarrito', JSON.stringify(torneoEnCarrito))

}

// AGREGAR PRODUCTOS AL CARRITO

const agregarProducto = document.querySelectorAll('.agregarProducto')
console.log(agregarProducto)
agregarProducto.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito)
})

function agregarAlCarrito(e) {
    const id = e.currentTarget.id
    const productoAgregado = listaProductos.find(producto => producto.id == id )
    
    if(productosEnCarrito.some(producto => producto.id == id)) {
        const index = productosEnCarrito.findIndex(producto => producto.id == id)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito))   
    console.log(productosEnCarrito) 

    const sumaCosto = document.createElement('div')
    sumaCosto.className = 'sumaContainer'
    sumaCosto.innerHTML = `
        
        <span>Cubregrips:</span><span>$</span>
        <span>Protector de paleta:</span><span>$</span>
        <span>Gorra:</span><span>$</span>
        <span>TOTAL:</span><span>$</span>
    `
                    
}






