/**
 * Created by Agus on 6/5/2017.
 */

/*
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function evaluarValor(valor, id_elemento) {
    valor = valor.replace(",", ".")

    if (isNaN(valor)){
        alert("el valor no es numerico");
        document.getElementById(id_elemento).value = "";
    }

}
/*
 * mostrar ocultar div
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function mostrar(opcion) {
 if (opcion= 'mostrarDiv') {
     document.getElementsByName("unDivu")[0].style.display = 'block';
 }
if (opcion= 'ocultarDiv') {
    document.getElementsByName("unDivu")[0].style.display = 'block';
}
}

function grados_gradianes(nombre_unidad, valor_unidad) {
    var grados, radianes;

    if (nombre_unidades == 'grados'){
        grados=valor_unidad;
        radianes=Math.PI/180*valor_unidad;

    }
    if (nombre_unidades =='radianes'){
        grados=Math.PI/180*valor_unidad;
        radianes=valor_unidad;
    }

    document.getElementsByTagName("imput")[0].value = grados;
    document.getElementsByTagName("imput")[1].value = radianes;

}
/*
 * Transforma las unidades
 * @method convertirUnidades
 * @param nombre unidad
 * @param valor unidad
 * @return Valor que retorna
 */

function convertirUnidades(nombre_unidad , valor_unidad) {
    var metro, pies, pulgada, yarda;
    valor_unidad = valor_unidad.replace (",",".")

    if (nombre_unidad == 'metro'){
        metro=valor_unidad;
        pies=valor_unidad*3.28084;
        pulgada=valor_unidad*39.3701;
        yarda=valor_unidad*1.09361;
    }
    if (nombre_unidad== 'pies')
    {
        pies= valor_unidad;
        metro=valor_unidad/3.28084;
        pulgada=metro*39.3701;
        yarda=metro*1.09361;
    }
    if (nombre_unidad == 'pulgada'){
        pulgada=valor_unidad;
        metro=valor_unidad/39.3701;
        pies=metro*3.28084
        yarda=metro*1.09361;
    }
    if (nombre_unidad == 'yarda'){
        yarda=valor_unidad;
        metro=valor_unidad/1.09361;
        pies=metro*3.28084;
        pulgada=metro*39.3701;

    }



    document.getElementById("metro").value = metro;
    document.getElementById("pies").value = pies;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value =yarda;

}
