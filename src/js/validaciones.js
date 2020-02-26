//desordena el arreglo de las fotos,como son pares de fotos, se repiten 2 veces en el arreglo

function llenarArreglo() {
    var fotos = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    //esto desordena el arreglo
    fotos = fotos.sort(function() {
        return Math.random() - 0.5
    });


    return fotos;

}

//esto carga la imagen en el div en cuanto al arreglo aleatorio
function cargarImagen() {
    var pokemon = llenarArreglo();
    var i = 0;
    while (i < pokemon.length) {
        var aleatorio = pokemon[i];
        document.getElementById(i).innerHTML = "<img src=src/img/" + aleatorio + ".png name="+aleatorio+ ">";
        i++;
    }
}

function ImagenListeilor() {
    
    cargarImagen();
    $("img").fadeOut("slow");
    $('#inicio').prop("disabled",true)
}


$(Document).ready(function(){
    

$("div.back").click(function(){



    $(this).toggleClass("front back");

    $(this).find("img").toggle();

    
    

    });




    

});
