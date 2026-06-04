function validarFormulario() {
    let campoNombre = $('#fname');
    let campoApellido = $('#lname');
    let campoRut = $('#rut');
    let campoFechaNacimiento = $('#fecha_nac');
    let campoEmail = $('#email');
    let campoExperiencia = $('#experiencia');
    let campoContrasena = $('#inputContrasena');
    let campoRepetirContrasena = $('#inputRepetirContrasena');

    if (campoNombre.val() == '') {
        campoNombre.addClass('is-invalid');
    }
    if (campoApellido.val() == '') {
        campoApellido.addClass('is-invalid');
    }
    if (campoRut.val() == '') {
        campoRut.addClass('is-invalid');
    }
    if (campoEmail.val() == '') {
        campoEmail.addClass('is-invalid');
    }
    if (campoContrasena.val() == '') {
        campoContrasena.addClass('is-invalid');
    }
    if (campoRepetirContrasena.val() == '') {
        campoRepetirContrasena.addClass('is-invalid');
    }
};

function elementoValido() {
    let campoNombre = $('#fname');
    let campoApellido = $('#lname');
    let campoRut = $('#rut');
    let campoEmail = $('#email');
    let campoContrasena = $('#inputContrasena');
    let campoRepetirContrasena = $('#inputRepetirContrasena');

    if (campoNombre.val() != '') {
        campoNombre.removeClass('is-invalid');
        campoNombre.addClass('is-valid');
    }

    if (campoApellido.val() != '') {
        campoApellido.removeClass('is-invalid');
        campoApellido.addClass('is-valid');
    }

    if (campoRut.val() != '' && validarRut(campoRut.val())) {
        campoRut.removeClass('is-invalid');
        campoRut.addClass('is-valid');
    }

    if (campoEmail.val() != '' && validarEmail(campoEmail.val())) {
            campoEmail.removeClass('is-invalid');
            campoEmail.addClass('is-valid');
    }

    if (campoContrasena.val() != '' && validarContrasena(campoContrasena.val())) {
        campoContrasena.removeClass('is-invalid');
        campoContrasena.addClass('is-valid');
    }

    if (campoRepetirContrasena.val() != '' && campoRepetirContrasena.val() == campoContrasena.val()) {
        campoRepetirContrasena.removeClass('is-invalid');
        campoRepetirContrasena.addClass('is-valid');
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