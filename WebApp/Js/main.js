$(document).ready(function(){
    fillDataSelect();
    
    $("button").click(function(){
        renderCards(productList);
            
        });

});
function fillDataSelect(){
    var ubicaciones = [
        { value: "1", text: "Zona 1" },
        { value: "4", text: "Zona 4" },
        { value: "7", text: "Zona 7" },
        { value: "8", text: "Zona 8" },
        { value: "9", text: "Zona 9" },
        { value: "10", text: "Zona 10" },
        { value: "11", text: "Zona 11" },
        { value: "12", text: "Zona 12" },
        { value: "14", text: "Zona 14" },
        { value: "16", text: "Zona 16" },
        { value: "17", text: "Zona 17" }
      ];
    
    var selectUbicacion = $('#op_Ubicacion');
    
    $.each(ubicaciones, function(key, ubicacion) {
        var optionUbicaciones = $('<option></option>')
          .attr('value', ubicacion.value)
          .text(ubicacion.text);
        selectUbicacion.append(optionUbicaciones);
    });

    var precios =[
        {value:"Gama alta", text:"Gama alta"},
        {value:"Promedio", text:"Promedio"},
        {value:"Economico", text:"Economico"}
    ];

    var selectPrecios = $("#op_Precio");

    $.each(precios, function(key, precio){
        var optionPrecios = $('<option></option>')
        .attr("value", precio.value)
        .text(precio.text);
        selectPrecios.append(optionPrecios);
    });
}

const productList = [];
    createObjects("Rincón del Steak","5ta ave. 10-30 zona 9",'117 GTQ - 311 GTQ',['Comida de mar', 'Comida internacional'],['Familiar', 'Romantico', 'Negocios'],['Domicilio', 'A la mesa', 'Para llevar', 'Bar'],['Lunes - Sábado: 12:00 pm - 22:00 pm', 'Domingo: 11:00 am - 21:00 pm'],'https://rincondelsteak.com.gt/menus-2','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/4.jpg','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/17.jpg','https://rincondelsteak.com.gt/wp-content/uploads/2022/10/8.jpg');
    function createObjects(nombre,ubicacion,precio,tipo_comida,ambiente,tipo_servicio,horario,web,img1,img2,img3){
        productList.push({
            nombre: nombre,
            ubicacion: ubicacion,
            precio: precio,
            tipo_comida: tipo_comida,
            ambiente: ambiente,
            tipo_servicio: tipo_servicio,
            horario: horario,
            web: web,
            img1: img1,
            img2: img2,
            img3: img3
        });
    }
    function renderCards(arrProducts){
        for(restaurant of arrProducts){
            
            const restaurantCard = document.createElement("div");
            restaurantCard.classList.add("card")
    
            const restaurantImg = document.createElement("img");
            restaurantImg.src = restaurant.img1;
            restaurantImg.alt = "Restaurante IMG";
    
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
    
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = restaurant.nombre;
    
            const cardUbicacion = document.createElement("p");
            cardUbicacion.classList.add("card-text");
            const textoUbicacion = document.createTextNode(restaurant.ubicacion);
            
    
            const cardUbicacionIco = document.createElement("img");
            cardUbicacionIco.src = "./Assets/IconoUbicacion.png";
            cardUbicacionIco.alt = "Ubicación Icono";
    
            const cardPrecio = document.createElement("p")
            cardPrecio.classList.add("card-text");
            const textoPrecio = document.createTextNode(restaurant.precio);
    
            const cardPrecioIco = document.createElement("img");
            cardPrecioIco.src = "./Assets/IconoDinero.png";
            cardPrecioIco.alt = "Precio Icono";
    
            const cardTipoComida = document.createElement("p")
            cardTipoComida.classList.add("card-text");

            var textipoComida = "";
            const cardTipoComidaIco = document.createElement("img");
            cardTipoComidaIco.src = "./Assets/IconoTipoDeComida.png";
            cardTipoComidaIco.alt = "Tipo comida Icono";
            
            if (Array.isArray(restaurant.tipo_comida)) {
                console.log("es un array");
                const listTipoComida = document.createElement("ul");
                for(element of restaurant.tipo_comida){
                    const liTipoComida = document.createElement("li");
                    liTipoComida.textContent = element;
                    listTipoComida.append(liTipoComida);

                    cardTipoComida.append(cardTipoComidaIco);
                    cardTipoComida.appendChild(listTipoComida);
                }
                
                
            } else {
                textipoComida = document.createTextNode(restaurant.tipo_comida);
                cardTipoComida.appendChild(textipoComida);
                console.log("NO es un array");
            }
    
            
    
            const mainButton = document.createElement("a");
            mainButton.href = "./Restaurant.html";
            mainButton.classList.add("btn");
            mainButton.classList.add("btn-primary");
            mainButton.textContent = "Ver más";

            cardUbicacion.append(cardUbicacionIco);
            cardUbicacion.appendChild(textoUbicacion);
            cardPrecio.append(cardPrecioIco);
            cardPrecio.appendChild(textoPrecio);
            
            cardBody.append(cardTitle, cardUbicacion, cardPrecio, cardTipoComida, mainButton);

            restaurantCard.append(restaurantImg, cardBody);
            $(".card-container").append(restaurantCard);
        }
    }
