$('#btnLogin').click(function () {
    $.ajax({
        url: '/cliente',
        data: 'tipoUsuario=1',
        method: 'POST',
        dataType: 'JSON',
        success: function (respuesta) {
            window.location.href = 'cliente.html';
        }
    });
});