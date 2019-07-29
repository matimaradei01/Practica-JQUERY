var contadorClick;
var contenido = "";

$(document).ready(function(){
        //LLENAR DATOS
        $("#id_usuario").text(usuario.login);
        $("#boton_cargar").on("click", function(){
        contadorClick = 0;
        //CAMBIAR FOTO
        $("#imagen").attr("src", usuario.avatar_url);
        $("#id_usuario").text(usuario.login);
        $("#nombre_usuario").text(usuario.name);
        $("#datoEmpresa").text(usuario.company);
        $("#numero_repositorios").text(usuario.public_repos);
        $("#numero_gists").text(usuario.public_gists);
        $("#numero_seguidos").text(usuario.followers);
        $("#numero_seguidores").text(usuario.following);

        $(".dato").click(function(){
            
           contadorClick++;
            $("#clicks_en_dato").text(contadorClick);
        })
        
        //LLENAR TABLA//
        contenido = "";

        for(let i=0; i<repositorios.length; i++){
            contenido += '<tr><td id="id">'+repositorios[i].id+'</td><td id="idRepositorio">'+repositorios[i].name+'</td><td id="idDescripcion">'+repositorios[i].description+'</td></tr>'
        }
        $("#cuerpo_table").html(contenido);
        //CAMBIAR ESTILOS

    })
    
    $("#labelSeguidos").click(function(){
        $("#labelSeguidos").css({'color':'red'})
    })
    $("#labelSeguidores").click(function(){
        $("#labelSeguidores").css({'color':'blue'})
    })

    $("#boton_reinciar").click(function(){
            //CAMBIAR FOTO
            $("#imagen").attr("src", "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png");
            $("#id_usuario").text("-");
            $("#nombre_usuario").text("-");
            $("#datoEmpresa").text("-");
            $("#numero_repositorios").text("0");
            $("#numero_gists").text("0");
            $("#numero_seguidos").text("0");
            $("#numero_seguidores").text("0");
            $("#clicks_en_dato").text("0");

            contenidoBorrado = '<tr><td id="id">ID</td><td id="idRepositorio">Repositorio</td><td id="idDescripcion">Descripción</td></tr>'
            $("#cuerpo_table").html(contenidoBorrado);
            $("#labelSeguidos").css({'color':'black'})
            $("#labelSeguidores").css({'color':'black'})
    })

    //EFECTOS FOTO
    $("#imagen").on("mouseover",function(){
        $("#imagen").css({"opacity": "0.4" })
    })
    $("#imagen").on("mouseout",function(){
        $("#imagen").css({"opacity": "1.0" })
    })

    //ALERT

    $("th").click(function(){
        alert("HOLISSS");
    });
    
})


