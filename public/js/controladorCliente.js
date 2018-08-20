$(document).ready(function(){
    $('#contenido').hide();
    esconderTodos();
    $('#informacion').show();
    desactivarTodos();
    $('#btnInformacion').addClass('active');
    $('#btnInicio').addClass('active');
    $('#favoritos').hide();
    $('#recomendaciones').hide();
});

$('#btnLogout').click(function () {
    $.ajax({
        url: '/logout',
        method: 'get',
        success: function (respuesta) {
            window.location.href = "index.html";
        }
    });
});

$('#barra').click(function () {
    $.ajax({
        url: '/logout',
        method: 'get',
        success: function (respuesta) {
            window.location.href = "index.html";
        }
    });
});

$('#btnBuscar').click(function(){
    $('#contenido').show();
    $('#buscador').hide();
});

$('#btnInformacion').click(function(){
    esconderTodos();
    $('#informacion').show();
    desactivarTodos();
    $('#btnInformacion').addClass('active');
});

$('#btnUbicacion').click(function(){
    esconderTodos();
    $('#ubicacion').show();
    desactivarTodos();
    $('#btnUbicacion').addClass('active');
});

$('#btnOfertas').click(function(){
    esconderTodos();
    $('#ofertas').show();
    desactivarTodos();
    $('#btnOfertas').addClass('active');
});

$('#btnCatalogo').click(function(){
    esconderTodos();
    $('#catalogo').show();
    desactivarTodos();
    $('#btnCatalogo').addClass('active');
});

function esconderTodos(){
    $('#informacion').hide();
    $('#ubicacion').hide();
    $('#ofertas').hide();
    $('#catalogo').hide();
}

function desactivarTodos(){
    $('#btnInformacion').removeClass('active');
    $('#btnUbicacion').removeClass('active');
    $('#btnOfertas').removeClass('active');
    $('#btnCatalogo').removeClass('active');
}

$('#btnFavoritos').click(function(){
    $('#btnInicio').removeClass('active');
    $('#btnRecomendaciones').removeClass('active');
    $('#btnFavoritos').addClass('active');
    $('#favoritos').show();
    $('#recomendaciones').hide();
    $('#principal').hide();
});

$('#btnRecomendaciones').click(function(){
    $('#btnInicio').removeClass('active');
    $('#btnRecomendaciones').addClass('active');
    $('#btnFavoritos').removeClass('active');
    $('#recomendaciones').show();
    $('#favoritos').hide();
    $('#principal').hide();
});

$('#btnInicio').click(function(){
    $('#btnInicio').addClass('active');
    $('#btnRecomendaciones').removeClass('active');
    $('#btnFavoritos').removeClass('active');
    $('#principal').show();
    $('#recomendaciones').hide();
    $('#favoritos').hide();
});