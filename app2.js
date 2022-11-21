// NOMBRE USUARIO

const nombreUser = localStorage.getItem('nombreUsuario')
const apellidoUser = localStorage.getItem('apellidoUsuario')
const emailUser = localStorage.getItem('emailUsuario')
console.log(nombreUser, apellidoUser, emailUser)

const bienvenida = document.querySelector('#nombreUser')

bienvenida.innerHTML = `
    <h2 class="tituloUser">Bienvenido ${nombreUser} ${apellidoUser}</h2>
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


// VALIDAR DATOS LOCALSTORAGE

/* if(nombreUser) {
    bienvenida.innerHTML = `
    <h2 class="tituloUser">Bienvenido ${nombreUser} ${apellidoUser}</h2>
    <p class="email">Su email registrado es <a href="#">${emailUser}</a></p>
`
} else */
 


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
            <button class="botonInscribirse" id="${torneo.precio}"><a href="#" >Inscribirse</a></button>
        </div>
    
        `
        torneos.append(nuevoTorneo)
    })
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
        <form action="#" class="formularioBuscador">
            <div class="seleccionCantidad">
                <select name="cubregrip" class="cubregrip">
                    <option value="">Selecciona una cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="button" id="${producto.precio}">Agregar</button>
            </div>
        </form>
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




const limpiarFiltros = document.querySelector('#limpiar')

const renderizar = () => {
    renderizarProductos(listaTorneos)
}


limpiarFiltros.addEventListener('click', renderizar) 


/* const torneos = document.querySelector('#torneos')

listaTorneos.forEach((torneo) => {
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
        <button class="botonInscribirse"><a href="#" >Inscribirse</a></button>
    </div>

    `
    torneos.append(nuevoTorneo)
}) */