function CargarCuadroGraficas () {
    $parametros = {
            'boton-llamar-cuadro-Graficas' : true,
            'id_equipo' : 5,
        };
    $url = "monitoreo/CuadroMonitoreo.php";
    $.ajax({
        type: "POST",
        url: $url,
        data: $parametros,
        success: function(data){
            $("#information").html(data);
        }
    });
}