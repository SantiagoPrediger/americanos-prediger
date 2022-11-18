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


/*
<div class="cardContainer">
                <div class="img">
                    <img src="../img/torneo1.png" class="imgTorneo" alt="flyer torneo 1">
                </div>
                <div class="infoTorneo">
                    <h2>
                        Nombre del evento super largo mas largo
                    </h2>
                    <div class="datosTorneo">
                        
                        <i class="fa-solid fa-map-pin"></i><span class="lugar">
                            Lugar del evento
                        </span><br>
                        <i class="fa-solid fa-sort"></i><span class="categoria">
                            Categoria del evento
                        </span><br>
                        <i class="fa-solid fa-calendar-days"></i><span class="dia">
                            Dia del evento
                        </span><br>
                        <i class="fa-solid fa-dollar-sign"></i></i><span class="precio">
                            Precio de inscripcion</span>
                    </div>
                    <button class="botonInscribirse">
                        inscribirse
                    </button>
                </div>
            </div>
*/