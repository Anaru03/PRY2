$(document).ready(function(){
    const restaurante = fillRestaurant("Rincón del Steak","5ta ave. 10-30 zona 9",'117 GTQ - 311 GTQ',['Comida de mar', 'Comida internacional'],['Familiar', 'Romantico', 'Negocios'],['Domicilio', 'A la mesa', 'Para llevar', 'Bar'],['Lunes - Sábado: 12:00 pm - 22:00 pm', 'Domingo: 11:00 am - 21:00 pm'],'https://rincondelsteak.com.gt/menus-2','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/4.jpg','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/17.jpg','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/8.jpg')
    
});



function fillRestaurant(nombre,ubicacion,precio,tipo_comida,ambiente,tipo_servicio,horario,web,img1,img2,img3){
    var h1 = $("h1");
    h1.text(nombre);

    
    var icoUbicacion = $("<img>").attr("src","./img/IconoUbicacion.png").attr("alt","Icono Ubicacion");
    $("#ubicacion").append(icoUbicacion,ubicacion);

    var icoPrecio = $("<img>").attr("src","./img/IconoDinero.png").attr("alt","Icono Dinero");
    $("#precio").append(icoPrecio,precio);

    var icoTipoComida = $("<img>").attr("src","./img/IconoTipoDeComida.png").attr("alt","Icono Tipo de Comida");
    if(Array.isArray(tipo_comida)){
        var listTipoComida = $("<ul>");
        for (element of tipo_comida) {
            var liTipoComida = $("<li>").text(element);
            listTipoComida.append(liTipoComida);
        }
        $("#tipoComida").append(icoTipoComida,listTipoComida);
    }else{
        $("#tipoComida").append(icoTipoComida,tipo_comida);
    }

    var icoAmbiente = $("<img>").attr("src","./img/IconoAmbiente.png").attr("alt","Icono Ambiente");
    if(Array.isArray(ambiente)){
        var listTipoAmbiente = $("<ul>");
        for (element of ambiente) {
            var liTipoAmbiente = $("<li>").text(element);
            listTipoAmbiente.append(liTipoAmbiente);
        }
        $("#ambiente").append(icoAmbiente,listTipoAmbiente);
    }else{
        $("#ambiente").append(icoAmbiente,ambiente);
    }

    var icoServicio = $("<img>").attr("src","./img/IconoServicio.png").attr("alt","Icono Servicio");
    if(Array.isArray(tipo_servicio)){
        var listTipoServicio = $("<ul>");
        for (element of tipo_servicio) {
            var liTipoServicio = $("<li>").text(element);
            listTipoServicio.append(liTipoServicio);
        }
        $("#servicio").append(icoServicio,listTipoServicio);
    }else{
        $("#servicio").append(icoServicio,ambiente);
    }

    var icoHorario = $("<img>").attr("src","./img/IconoHorario.png").attr("alt","Icono Horario");
    if(Array.isArray(horario)){
        var listHorarios = $("<ul>");
        for (element of horario) {
            var liTipoServicio = $("<li>").text(element);
            listHorarios.append(liTipoServicio);
        }
        $("#horario").append(icoHorario,listHorarios);
    }else{
        $("#horario").append(icoHorario,ambiente);
    }
    
    $("#paginaWeb").attr("href",web).text(web).attr("target", "_blank");

    $("#img1").attr("src",img1);
    $("#img2").attr("src",img2);
    $("#img3").attr("src",img3);
    
}
