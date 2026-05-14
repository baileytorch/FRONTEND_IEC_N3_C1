function validarFormulario(){
    let campoNombre = document.getElementById('fname');
    let valorNombre = campoNombre.value;

    if (valorNombre == ''){
        campoNombre.classList.add('is-invalid')
    }else{
        campoNombre.classList.remove('is-invalid')
        campoNombre.classList.add('is-valid')
    }
};