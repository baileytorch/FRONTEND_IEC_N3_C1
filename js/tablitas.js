const urlUsuarios = 'https://jsonplaceholder.typicode.com/users';
const urlPublicaciones = 'https://jsonplaceholder.typicode.com/posts';
const urlComentarios = 'https://jsonplaceholder.typicode.com/comments';
const urlTareas = 'https://jsonplaceholder.typicode.com/todos';

function cargarData() {
    new DataTable('#example', {
        ajax: {
            url: 'https://jsonplaceholder.typicode.com/users',
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'username' },
            { data: 'email' },
            { data: 'phone' },
            { data: 'website' }
        ],
        language: window.lenguaje
    });
};

function seleccionarData() {
    const tabla = $('#example');
    const select = $('#selectDatos');

    switch (select.val()) {
        case '1':
            const campos = ['N°', 'Nombre', 'Usuario', 'Correo', 'Teléfono', 'Sitio Web']
            armarTabla(campos);
            cargarData();
            break;
        case '2':
            alert('Caso 2')
            break;
        case '3':
            alert('Caso 3')
            break;
        case '4':
            alert('Caso 4')
            break;
    }
}

function armarTabla(campos) {
    const tabla = $('#example');
    let $fila = $('<tr></tr>');
    let $cabecera = $('<thead></thead>');
    let $pie = $('<tfoot></tfoot>');

    $.each(campos, function (index, value) {
        let celda = $(`<th>${value}</th>`);
        $fila.append(celda);
    });
    $cabecera.append($fila);
    $pie.append($fila);    
    tabla.append($cabecera, $pie)
};