/* const datosUsuario = {
    email: '',
    password: ''
} */
var email, password, error, nombre, apellido, documento, email, carrera, cargo;
email = document.getElementById("email");
password = document.getElementById("password");
error = document.getElementById("error");
nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
cargo = document.getElementById("cargo");


function validar() {
    documento = document.getElementById("documento").value;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    cargo = document.getElementById("cargo").value;
    email = document.getElementById("email").value;
    carrera = document.getElementById("carrera").value;

    if (documento === "" || nombre === "" || apellido === "" || email === "" || carrera === "" || mensaje === "") {
        error.innerHTML = ('Bienvenido');

    } else {
        error.innerHTML = ('ingrese los datos');
    }
}

function iniciosesion() {
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



// funcion navegacion
(function () {
    $(function () {
        // ---   Menu responsive
        $('.menu-movil').on('click', function () {
            $('.menu').slideToggle();
        });

        // Reaccionar a Resize en la pantalla
        var breakpoint = 768;
        $(window).resize(function () {
            if ($(document).width() >= breakpoint) {
                $('.menu').show();
            } else {
                $('.menu').hide();
            }
        });

    });
})();



// ------- ventana modal

const open = document.getElementById('open');
const modal_containder = document.getElementById('modal-containder');
const closse = document.getElementById('closse');

open.addEventListener('click', () => {
    modal_containder.classList.add('show');
});
closse.addEventListener('click', () => {
    modal_containder.classList.remove('show');
});

//  ---- funcion textarea------
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}