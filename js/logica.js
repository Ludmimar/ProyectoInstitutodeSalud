/* Hamburger button*/
// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
	this.classList.toggle('is-active');
	document.querySelector( ".menuppal" ).classList.toggle("is_active");
	event.preventDefault();
}
// event
menu.addEventListener('click', toggleMenu, false);

/* --------------------------- CONTACTO ---------------------------*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	mensaje: /^[a-zA-ZÀ-ÿ-0-9-_.+-\s]{1,40}$/
}
const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	mensaje: false,
}
const validarFormulario = (e) => {
	switch (e.target.name) {		
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
/*Para los colores*/
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

/*---------------------------------------------------------------------------------------*/
/* Para el envio por formspree, para que no me aparezca la respu por defecto*/
const $form = document.querySelector('#formulario') // #formulario es el id

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
	event.preventDefault()
	const form1 = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: form1, // nombre de la constante
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok){
		this.reset()
		alert('Gracias por contactarnos!!! te responderemos a la brevedad... :)')
	}
}
/*FUNCION QUE HABILITA EL BOTON ENVIAR (SI LOS CAMPOS TIENEN DATOS) */
function toggleButton()
    {
        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;
		let telefono = document.getElementById('telefono').value;
		let mensaje = document.getElementById('mensaje').value;
        if (nombre && correo && telefono && mensaje) {
            document.getElementById('submitButton').disabled = false;
        } else {
            document.getElementById('submitButton').disabled = true;
        }
    }

