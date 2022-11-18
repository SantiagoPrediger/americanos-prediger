console.log(listaTorneos);


// ARRAYS

const torneos = document.querySelector('#torneos')

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
        <button class="botonInscribirse">inscribirse</button>
    </div>

    `
    torneos.append(nuevoTorneo)
})


let filtroClubes = document.querySelector('#club')
let filtroCategorias = document.querySelector('#cat')

const categoriasFiltradas = listaTorneos.filter(catego => catego.categoria)
console.log(categoriasFiltradas)

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