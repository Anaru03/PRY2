$(document).ready(function(){
    
    //alert("HOLAssssss")
    fillDataSelect();
    loadAllRestaurants();

    verificarAnchoPantalla();

    
});

var productList = [];

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



//createObjects("Rincón del Steak","5ta ave. 10-30 zona 9",'117 GTQ - 311 GTQ','Comida de mar','Familiar','Domicilio','Lunes - Sábado: 12:00 pm - 22:00 pm' ,'https://rincondelsteak.com.gt/menus-2','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/4.jpg','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/17.jpg','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/8.jpg');

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
        img1: img1
    });
}

    function renderCards(arrProducts){
        if(arrProducts.length > 0){
            for(restaurant of arrProducts){
            
                var restaurantCard = $("<div>").addClass("card");
    
                var restaurantImg = $("<img>").attr("src", restaurant.img1).attr("alt", "Restaurante IMG");
    
                var cardBody = $("<div>").addClass("card-body");
    
                var cardTitle = $("<h5>").addClass("card-title").text(restaurant.nombre);
                
                var cardUbicacion = $("<p>").addClass("card-text");
    
                var textoUbicacion = $("<span>").text(restaurant.ubicacion);
                var cardUbicacionIco = $("<img>").attr("src", "./img/IconoUbicacion.png").attr("alt", "Ubicación Icono");
                cardUbicacion.append(cardUbicacionIco, textoUbicacion);
    
                var cardPrecio = $("<p>").addClass("card-text");
    
                var textoPrecio = $("<span>").text(restaurant.precio);
                var cardPrecioIco = $("<img>").attr("src", "./img/IconoDinero.png").attr("alt", "Precio Icono");
                cardPrecio.append(cardPrecioIco, textoPrecio);
    
                var cardTipoComida = $("<p>").addClass("card-text");
    
                var cardTipoComidaIco = $("<img>").attr("src", "./img/IconoTipoDeComida.png").attr("alt", "Tipo comida Icono");
                var textipoComida = $("<span>").text(restaurant.tipo_comida);
                cardTipoComida.append(cardTipoComidaIco, textipoComida);
                
                var cardAmbiente = $("<p>").addClass("card-text");
    
                var cardAmbienteIco = $("<img>").attr("src", "./img/IconoAmbiente.png").attr("alt", "Ambiente Icono");
                var textoAmbiente = $("<span>").text(restaurant.ambiente);
                cardAmbiente.append(cardAmbienteIco,textoAmbiente);
    
                var cardTipoServicio = $("<p>").addClass("card-text");
    
                var cardTipoServicioIco = $("<img>").attr("src", "./img/IconoServicio.png").attr("alt", "Servicio Icono");
                var textoTipoServicio = $("<span>").text(restaurant.tipo_servicio);
                cardTipoServicio.append(cardTipoServicioIco,textoTipoServicio);
    
                var cardHorario = $("<p>").addClass("card-text");
    
                var cardHorarioIco = $("<img>").attr("src", "./img/IconoHorario.png").attr("alt", "Horario Icono");
                var textoHorario = $("<span>").text(restaurant.horario);
                cardHorario.append(cardHorarioIco,textoHorario);
                var mainButton = $("<a>").attr("href", restaurant.web).addClass("btn btn-primary").text("Sitio web").attr("target","_blank");
    
                cardBody.append(cardTitle, cardUbicacion, cardPrecio, cardTipoComida, cardAmbiente, cardTipoServicio, cardHorario, mainButton);
                restaurantCard.append(restaurantImg, cardBody);
                $(".card-container").append(restaurantCard);
            }
        }
        else{
            $(".card-container").empty();
        }
    }

    

function loadAllRestaurants(){
    $.ajax( {
			
        type: "GET",
        url: '/FoodieGT/HelloServlet',
        dataType: "json",
        
        success: function(data) {
            
            var conteo = data.conteo
            var restaurantes = data.Restaurantes;

            $.each(restaurantes, function(index, restaurante) {
                var ubicacion = restaurante.ubicacion.replace(/"/g, "");
                var precio = restaurante.precio.replace(/"/g, "");
                var tipoServicio = restaurante.tipoServicio.replace(/"/g, "");
                var horarios = restaurante.horarios.replace(/"/g, "");
                var web = restaurante.web.replace(/"/g, "");
                var ambiente = restaurante.ambiente.replace(/"/g, "");
                var nombre = restaurante.nombre.replace(/"/g, "");
                var tipoComida = restaurante.tipoComida.replace(/"/g, "");
                var img1 = restaurante.img1.replace(/"/g, "");
                createObjects(nombre,ubicacion,precio,tipoComida,ambiente,tipoServicio,horarios,web,img1)
                
            });
            renderCards(productList);
        },
        
    } );
    
    
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
	productList = [];
	$(".card-container").empty();
    $.ajax({
        type: "GET",
        url: '/FoodieGT/SearchRestaurants',
        data: {
            nombre : nombre,
            img1 : img1,
            ubicacion: ubicacion,
            precio: precio,
            tipoComida: tipoComida,
            ambiente: ambiente,
            servicio: servicio,
            horario: horario
        },
        success: function(data) {
        
        var conteo = data.conteo;
        var restaurantes = data.Restaurantes;
        
        $.each(restaurantes, function(index, restaurante) {
            var ubicacion = restaurante.ubicacion.replace(/"/g, "");
            var precio = restaurante.precio.replace(/"/g, "");
            var tipoServicio = restaurante.tipoServicio.replace(/"/g, "");
            var horarios = restaurante.horarios.replace(/"/g, "");
            var web = restaurante.web.replace(/"/g, "");
            var ambiente = restaurante.ambiente.replace(/"/g, "");
            var nombre = restaurante.nombre.replace(/"/g, "");
            var tipoComida = restaurante.tipoComida.replace(/"/g, "");
            var img1 = restaurante.img1.replace(/"/g, "");
            console.log("nombre: "+nombre);
            createObjects(nombre, ubicacion, precio, tipoComida, ambiente, tipoServicio, horarios, web, img1);
        });
        renderCards(productList);
        },
        error: function(xhr, status, error) {
        console.log("ERROR:", error);
        }
    });
});