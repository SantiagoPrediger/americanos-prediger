
/* const nombre = document.querySelector('#nombreUsuario')
const apellido = document.querySelector('#contraseñaUsuario')
const email = document.querySelector('#email')
const button = document.querySelector('#button')

button.addEventListener('submit', (e) =>{
    e.preventDefault();

})
 */
/* class Usuario {
    constructor(nombre, apellido, email,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
}
}

function crearUsuario(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombreUsuario').value;
    const apellido = document.querySelector('#contraseñaUsuario').value;
    const email = document.querySelector('#email').value;
}
const usuario1 = new Usuario(nombre, apellido, email)
 */


class Usuario {
    constructor(nombre, apellido, email,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const formUsuario = document.querySelector('#formUsuario')

formUsuario.addEventListener('submit', validarFormulario )



function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#email').value

    console.log(nombre, apellido, email)
    localStorage.setItem('nombreUsuario', nombre)
    localStorage.setItem('apellidoUsuario', apellido)
    localStorage.setItem('emailUsuario', email)

    window.location = "./pages/torneos.html"
}

/* const usuario1 = new Usuario(nombre, apellido, email) */
