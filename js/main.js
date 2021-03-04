/* const datosUsuario = {
    email: '',
    password: ''
} */

/* function validar(){
    var nombre, apellido, documento, email, carrera;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    documento = document.getElementById("documento").value;
    email = document.getElementById("email").value;
    carrera = document.getElementById("carrera").value;

    if(nombre === "" || apellido === "" || documento === ""|| email === "" || carrera === "" || mensaje === ""){
        alert("Todos los campos son Obligartorios");
        return false;
    }
    else{
        alert("Tu Mensaje fue enviado");
    }
} 
 */

var email, password, error;
email = document.getElementById("email");
password = document.getElementById("password");
error = document.getElementById("error");



function iniciosesion() {
    debugger;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email === "steven@gmail.com" && password === "12345") {
        error.innerHTML = ('Bienvenido');
    } else {
        error.innerHTML = ('ingrese los datos');
    }
}

// validar el acceso de usuarios
/* const ingresar = document.querySelector('.ingresar');

ingresar.addEventListener('submit', function (evento) {
    evento.windows.location();
    // validar login
    const {email, password } = datosUsuario;
    if (email === '' && password === '') {
        mostarError('Todos los datos son necesarios');
    } else
        mostarError('Datos Invalidos');
});

// mostrar error en pantalla
function mostarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    ingresar.appendChild(error);

    // Desaparecer despues de 5 segundos
    setTimeout(() => {
        error();
    }, 5000);
} */


// funcion para colapzar el menu de opciones de novedades
const $detailslist = document.querySelectorAll('details')
$detailslist.forEach(($details) => {
    $details.querySelector('summary').addEventListener('click', expand)
})

function expand() {
    $detailslist.forEach(($details) => {
        $details.removeAttribute('open')
    })
}

// funcion navegacion
$(document).ready(function () {
    $('.menu li:has(ul)').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();

        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }

    });
    // ---   Menu responsive
    $('.menu-movil').on('click', function () {
        $('.menu').slideToggle();
    });
});



// ------- ventana modal

const open = document.getElementById('open');
const modal_containder = document.getElementById('modal-containder');
const closse = document.getElementById('closse');

open.addEventListener('click', () => {
    modal_containder.classList.add('show');
})
closse.addEventListener('click', () => {
    modal_containder.classList.remove('show');
})