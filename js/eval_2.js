function validarFormulario() {
    let campoNombre = document.getElementById('fname');
    let campoApellido = document.getElementById('lname');
    let campoRut = document.getElementById('rut');
    let campoFechaNacimiento = document.getElementById('fecha_nac');
    let campoEmail = document.getElementById('email');
    let campoExperiencia = document.getElementById('experiencia');

    if (campoNombre.value == '' || campoApellido.value == '' || campoRut.value == '' || campoFechaNacimiento.value == '' || campoEmail.value == '' || campoExperiencia.value == '') {
        campoNombre.classList.add('is-invalid');
        campoApellido.classList.add('is-invalid');
        campoRut.classList.add('is-invalid');
        campoEmail.classList.add('is-invalid');
    }
};

function elementoValido() {
    let campoNombre = document.getElementById('fname');
    let campoApellido = document.getElementById('lname');
    let campoRut = document.getElementById('rut');
    let campoEmail = document.getElementById('email');

    if (campoNombre.value != '') {
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
    }

    if (campoApellido.value != '') {
        campoApellido.classList.remove('is-invalid');
        campoApellido.classList.add('is-valid');
    }

    if (campoRut.value != '') {
        campoRut.classList.remove('is-invalid');
        campoRut.classList.add('is-valid');
    }

    if (campoEmail.value != '') {
        if (validarEmail(campoEmail.value)) {
            campoEmail.classList.remove('is-invalid');
            campoEmail.classList.add('is-valid');
        }
    }
}

function validarEmail(valor) {
    const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
    if (regex.test(valor)) { return true };
};