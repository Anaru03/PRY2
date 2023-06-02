$(document).ready(function(){
    
    fillDataSelect();

    verificarAnchoPantalla();
    
});

function verificarAnchoPantalla() {
    if ($(window).width() < 600) {
        $('#btns').addClass('justify-content-center');
    } else {
        $('#btns').removeClass('justify-content-center');
    }
}

$(window).resize(function() {
    verificarAnchoPantalla();
});

function fillDataSelect(){
    var ubicaciones = [
        { value: 1, text: "Zona 1" },
        { value: 4, text: "Zona 4" },
        { value: 7, text: "Zona 7" },
        { value: 8, text: "Zona 8" },
        { value: 9, text: "Zona 9" },
        { value: 10, text: "Zona 10" },
        { value: 11, text: "Zona 11" },
        { value: 12, text: "Zona 12" },
        { value: 14, text: "Zona 14" },
        { value: 16, text: "Zona 16" },
        { value: 17, text: "Zona 17" }
        ];
    
    var selectUbicacion = $('#op_Ubicacion');
    
    $.each(ubicaciones, function(key, ubicacion) {
        var optionUbicaciones = $('<option></option>').attr('value', ubicacion.value).text(ubicacion.text);
        selectUbicacion.append(optionUbicaciones);
    });

    var precios =[
        {value:"Gama alta", text:"Gama alta"},
        {value:"Promedio", text:"Promedio"},
        {value:"Economico", text:"Economico"}
    ];

    var selectPrecios = $("#op_Precio");

    $.each(precios, function(key, precio){
        var optionPrecios = $('<option></option>').attr("value", precio.value).text(precio.text);
        selectPrecios.append(optionPrecios);
    });

    var tipoComidas = [
        {value: "Comida internacional", text:"Comida internacional"},
        {value: "Guatemalteca", text:"Guatemalteca"},
        {value: "Comida rapida", text:"Comida rapida"},
        {value: "Vegetariano", text:"Vegetariano"},
        {value: "Vegano", text:"Vegano"},
        {value: "Saludable", text:"Saludable"},
        {value: "Comida de mar", text:"Comida de mar"},
        {value: "Infantil", text:"Infantil"},
        {value: "Bar", text:"Bar"},
        {value: "Gourmet", text:"Gourmet"}
    ];

    var selectTipoComida = $('#op_TipoComida');

    $.each(tipoComidas, function(key, tipoComida){
        var optionTipoComida = $('<option></option>').attr("value", tipoComida.value).text(tipoComida.text);
        selectTipoComida.append(optionTipoComida);
    });

    var tipoAmbientes = [
        {value: "Romantico", text:"Romantico"},
        {value: "Familiar", text:"Familiar"},
        {value: "Negocios", text:"Negocios"},
        {value: "Vistas", text:"Vistas"},
        {value: "Entretenimiento", text:"Entretenimiento"},
        {value: "Aire libre", text:"Aire libre"}

    ];

    var selectAmbinte = $('#op_Ambiente');

    $.each(tipoAmbientes, function(key, tipoAmbiente){
        var optionTipoAmbiente = $('<option></option>').attr("value",tipoAmbiente.value).text(tipoAmbiente.text);
        selectAmbinte.append(optionTipoAmbiente);
    });

    var tipoServicios = [
        {value: "Para llevar", text:"Para llevar"},
        {value: "Domicilio", text:"Domicilio"},
        {value: "Bufet", text:"Bufet"},
        {value: "A la mesa", text:"A la mesa"},
        {value: "Bar", text:"Bar"}
    ];

    var selectServicio = $('#op_Servicio');

    $.each(tipoServicios,function(key, tipoServicio){
        var optionTipoServicio = $('<option></option>').attr("value",tipoServicio.value).text(tipoServicio.text);
        selectServicio.append(optionTipoServicio);
    });

    var horarios = [
        {value: "Desayuno", text:"Desayuno"},
        {value: "Almuerzo", text:"Almuerzo"},
        {value: "Cena", text:"Cena"},
        {value: "Brunch", text:"Brunch"},
        {value: "Happy hour", text:"Happy hour"},
        {value: "24 horas", text:"24 horas"},
        {value: "Fines de Semana", text:"Fines de Semana"}
    ];

    var selectHorario = $("#op_Horario");

    $.each(horarios, function(key, horario){
        var optionHorario = $('<option></option>').attr("value",horario.value).text(horario.text)
        selectHorario.append(optionHorario);
    });

}


function createObjects(nombre,ubicacion,precio,tipo_comida,ambiente,tipo_servicio,horario,web,img1){
    productList.push({
        nombre: nombre,
        ubicacion: ubicacion,
        precio: precio,
        tipo_comida: tipo_comida,
        ambiente: ambiente,
        tipo_servicio: tipo_servicio,
        horario: horario,
        web: web,
        img1 : img1
    });
}

$("button").click(function() {
    var nombre = $("#nombre").val() || "";
    var img1 = $("#img1").val() || "";
    var ubicacion = $("#op_Ubicacion").val() || "";
    var precio = $("#op_Precio").val() || "";
    var tipoComida = $("#op_TipoComida").val() || "";
    var ambiente = $("#op_Ambiente").val() || "";
    var servicio = $("#op_Servicio").val() || "";
    var horario = $("#op_Horario").val() || "";
    $.ajax({
        type: "GET",
        url: '/FoodieGT/SaveRestaurantServlet',
        data: {
        ubicacion: ubicacion,
        precio: precio,
        tipoComida: tipoComida,
        ambiente: ambiente,
        servicio: servicio,
        horario: horario,
        nombre: nombre,
        img1: img1
        },
        success: function(data) {
            alert("Resultado: " + data.resultado);
        },
        error: function(xhr, status, error) {
        console.log("ERROR:", error);
        }
    });
});