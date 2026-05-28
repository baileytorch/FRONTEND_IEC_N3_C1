function validarFormulario() {
    let campoNombre = document.getElementById('fname');
    let campoApellido = document.getElementById('lname');
    let campoRut = document.getElementById('rut');
    let campoFechaNacimiento = document.getElementById('fecha_nac');
    let campoEmail = document.getElementById('email');
    let campoExperiencia = document.getElementById('experiencia');
    let campoContrasena = document.getElementById('inputContrasena');
    let campoRepetirContrasena = document.getElementById('inputRepetirContrasena');

    if (campoNombre.value == '') {
        campoNombre.classList.add('is-invalid');
    }
    if (campoApellido.value == '') {
        campoApellido.classList.add('is-invalid');
    }
    if (campoRut.value == '') {
        campoRut.classList.add('is-invalid');
    }
    if (campoEmail.value == '') {
        campoEmail.classList.add('is-invalid');
    }
    if (campoContrasena.value == '') {
        campoContrasena.classList.add('is-invalid');
    }
    if (campoRepetirContrasena.value == '') {
        campoRepetirContrasena.classList.add('is-invalid');
    }
};

function elementoValido() {
    let campoNombre = document.getElementById('fname');
    let campoApellido = document.getElementById('lname');
    let campoRut = document.getElementById('rut');
    let campoEmail = document.getElementById('email');
    let campoContrasena = document.getElementById('inputContrasena');
    let campoRepetirContrasena = document.getElementById('inputRepetirContrasena');

    if (campoNombre.value != '') {
        console.log(campoNombre.value)
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
    }

    if (campoApellido.value != '') {
        campoApellido.classList.remove('is-invalid');
        campoApellido.classList.add('is-valid');
    }

    if (campoRut.value != '' && validarRut(campoRut.value)) {
        campoRut.classList.remove('is-invalid');
        campoRut.classList.add('is-valid');
    }

    if (campoEmail.value != '' && validarEmail(campoEmail.value)) {
            campoEmail.classList.remove('is-invalid');
            campoEmail.classList.add('is-valid');
    }

    if (campoContrasena.value != '' && validarContrasena(campoContrasena.value)) {
        campoContrasena.classList.remove('is-invalid');
        campoContrasena.classList.add('is-valid');
    }

    if (campoRepetirContrasena.value != '' && campoRepetirContrasena.value == campoContrasena.value) {
        campoRepetirContrasena.classList.remove('is-invalid');
        campoRepetirContrasena.classList.add('is-valid');
    }
}

function validarEmail(valor) {
    const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
    if (regex.test(valor)) { return true };
};

function validarContrasena(valor) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (regex.test(valor)) { return true };
};

function validarRut(rutCompleto) {
    // 1. Limpiar el RUT eliminando puntos, espacios y guiones
    const rutLimpiado = rutCompleto.replace(/^0+|[^0-9kK]+/g, '');
    if (rutLimpiado.length < 2) return false;

    // 2. Separar el cuerpo y el dígito verificador
    const cuerpo = rutLimpiado.slice(0, -1);
    const dvIngresado = rutLimpiado.slice(-1).toUpperCase();

    // 3. Calcular el dígito verificador esperado
    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);

    // 4. Formatear el resultado del dígito verificador
    let dvCalculado = '';
    if (dvEsperado === 11) dvCalculado = '0';
    else if (dvEsperado === 10) dvCalculado = 'K';
    else dvCalculado = dvEsperado.toString();

    // 5. Comparar
    return dvCalculado === dvIngresado;
}