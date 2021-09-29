$(document).ready(inicio);

/* Variables - Listas */
let logueado = null;
let colaboradores = [];
let recetas = [];
let ultimoIdReceta = 1;
let admin = new administrador("Jose", "Gonzalez", "chef", "chef-01");

/* Inicio del programa. */
function inicio() {
    precargarDatos();
    mostrarUsuAnonimo();
    eventosDeClick();
}

/* Todos los botones se cargan en ésta función. */
function eventosDeClick() {
    $("#btnInicio").click(inicioSesion);
    $("#btnLogout").click(logout);
    $("#btnAgregarColaborador").click(tomarDatosColaboradoes);
    $("#btnAgregarReceta").click(tomarDatosRecetas);
    $("#aMayorDuracion").click(recetaMayorDuracion);
    $("#aDadoUnTiempo").click(mostrarDivReporte2);
    $("#btnMostrarReporte2").click(reporteDadoUnTiempo);
    $("#aMejorRaiting").click(reporteSegunRaiting);
    $("#btnVolver").click(mostrarUserAdmin);
    $("#btnBuscaRecetas").click(buscadorDeRecetasPrincipal);
}

/* Precarga de datos de los usuarios. */
function precargarDatos() {
    let c1 = altaColaboradores("Pepe", "Pepe", "pepe", "p-pepe", false);
    let c2 = altaColaboradores("Roberto", "Perez", "rperez", "r-perez", true);
    let c3 = altaColaboradores("Susana", "Del Toro", "sdeltoro", "s-deltoro", false);
    let c4 = altaColaboradores("Maria", "Duarte", "mduarte", "m-duarte", true);
    let c5 = altaColaboradores("Pedro", "Gutierrez", "pgutierrez", "p-gutierrez", true);

    /* Precarga de datos de las recetas. */
    let r1 = altaRecetas(ultimoIdReceta, admin, "Alfajor de Maicena", "alfajoresDeMaicena.jpg", 30, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 6, 0);
    let r2 = altaRecetas(ultimoIdReceta, admin, "Biscochuelo", "biscochuelo.jpg", 40, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 15, 5);
    let r3 = altaRecetas(ultimoIdReceta, admin, "Donas", "Donas.jpg", 30, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 50, 0);
    let r4 = altaRecetas(ultimoIdReceta, admin, "Budin", "budin.jpg", 400, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 26, 20);
    let r5 = altaRecetas(ultimoIdReceta, c1, "Costilla de Cerdo", "costillaDeCerdo.jpg", 60, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 30, 12);
    let r6 = altaRecetas(ultimoIdReceta, c2, "Croquetas de Jamón", "croquetasdeJamon.jpg", 55, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 12, 2);
    let r7 = altaRecetas(ultimoIdReceta, c3, "Kebab", "kebab.jpg", 40, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 20, 12);
    let r8 = altaRecetas(ultimoIdReceta, c4, "Lasaña", "lasanha.jpg", 45, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 12, 2);
    let r9 = altaRecetas(ultimoIdReceta, c5, "Magdalenas", "Magdalenas.jpg", 150, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 25, 3);
    let r10 = altaRecetas(ultimoIdReceta, c1, "Mousse de Maracuyá", "MousseMaracuya.jpg", 45, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 30, 12);
    let r11 = altaRecetas(ultimoIdReceta, c1, "Nioquis", "nioquis.jpg", 60, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 10, 15);
    let r12 = altaRecetas(ultimoIdReceta, c2, "Pan de Queso", "panDeQueso.jpg", 55, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 65, 20);
    let r13 = altaRecetas(ultimoIdReceta, c3, "Pastel de Carne", "PastelCarne.jpg", 30, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 30, 1);
    let r14 = altaRecetas(ultimoIdReceta, c4, "Panqueque", "Panqueques.jpg", 45, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 55, 15);
    let r15 = altaRecetas(ultimoIdReceta, c5, "Paté de Atún", "pateAtun.jpg", 150, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 30, 25);
    let r16 = altaRecetas(ultimoIdReceta, c1, "Polenta", "polenta.jpg", 45, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 12, 15);
    let r17 = altaRecetas(ultimoIdReceta, c3, "Pollo", "Pollo.jpg", 30, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 20, 15);
    let r18 = altaRecetas(ultimoIdReceta, c4, "Tomate Relleno", "Tomate.jpg", 45, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 12, 3);
    let r19 = altaRecetas(ultimoIdReceta, c5, "Torta de Coliflor", "tortaColiflor.jpg", 150, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 55, 27);
    let r20 = altaRecetas(ultimoIdReceta, admin, "Torta de Tres Leches", "tortaTresLeches.jpg", 45, "1-Pon a hervir un litro de leche y cuando rompa el hervor, agrega el arroz y cocina a fuego lento(arroz de cocido rápido) con la cascara de limón.<br> 2-Bate mientras las yemas con el azúcar bien batidas y, cuando esté cocido el arroz, agrega fuera del fuego la crema blanquecina obtenida", 30, 12);
}

/* Cierra sesión al usuario logueado y vuelve al usuario Anónimo. */
function logout() {
    logueado = null;
    mostrarUsuAnonimo();
}

/* Muestra la interfaz del Usuario Anónimo. */
function mostrarUsuAnonimo() {
    $("#altaReceta").hide();
    $("#altaColaborador").hide();
    $("#botonesAdmin").hide();
    $("#btnLogout").hide();
    $("#bienvenida").hide();
    $("#inicioSesion").show();
    $("#muroRecetas").show();
    $("#buscarRecetas").show();
    $("#txtBuscarReceta").val("")
    $("#pMostrarNoResultBusqueda").html("")
    $("#tablaUsuarios").hide();
    escribirRecetasEnPantalla(recetas);
    $("#txtNombreUsuario").val("");
    $("#txtContraseña").val("");
    $("#divBtnVolver").hide();
    $("#divRep2").hide();

}

/* Muestra la interfaz del Usuario Administrador. */
function mostrarUserAdmin() {
    $("#pReceta").html("");
    $("#txtTitulo").val("");
    $("#fileFoto").val("");
    $("#txtTiempo").val("");
    $("#txtDescripcion").val("");
    $("#pColaborador").html("");
    $("#txtNombre").val("");
    $("#txtApellido").val("");
    $("#btnLogout").show();
    $("#bienvenida").show();
    $("#bienvenida").html("<b>Bienvenido/a Admin</b>");
    $("#botonesAdmin").show();
    $("#muroRecetas").hide();
    $("#inicioSesion").hide();
    $("#altaReceta").show();
    $("#altaColaborador").show();
    $("#tablaUsuarios").hide();
    $("#tablaUsuarios").show();
    $("#buscarRecetas").hide();
    listarUsuariosColaboradores(colaboradores);
    $("#divBtnVolver").hide();
    $("#divRep2").hide();
}

/* Muestra la interfaz del Usuario Colaborador. */
function mostrarUserColaborador() {
    $("#pReceta").html("");
    $("#txtTitulo").val("");
    $("#fileFoto").val("");
    $("#txtTiempo").val("");
    $("#txtDescripcion").val("");
    $("#btnLogout").show();
    $("#inicioSesion").hide();
    $("#muroRecetas").hide();
    $("#buscarRecetas").hide();
    $("#botonesAdmin").hide();
    $("#bienvenida").show();
    $("#bienvenida").html("<b>Bienvenido/a Colaborador!</b>");
    $("#altaReceta").show();
    $("#tablaUsuarios").hide();
    $("#divBtnVolver").hide();
    $("#divRep2").hide();
}

/* Login: Verifica User, Pass y estado de los ususarios. */
function inicioSesion() {
    $("#pInicioSesion").html("");
    let usuario = $("#txtNombreUsuario").val();
    let contraseña = $("#txtContraseña").val();

    if (usuario == admin.username && contraseña == admin.pass && admin.estado == true) {
        logueado = admin;
        mostrarUserAdmin();
    } else {
        let colaborador = verificarDatosLoginColaborador(usuario, contraseña);
        if (colaborador != null) {
            logueado = colaborador;
            mostrarUserColaborador();
        } else {
            $("#pInicioSesion").html("Datos incorrectos o usuario inexistente, contacte con el administrador");
            $("#txtNombreUsuario").val("");
            $("#txtContraseña").val("");

        }
    }
}

/* Al recibir dos parametros los busca en la lista Colaboradores y si no existe retorna null*/
function verificarDatosLoginColaborador(user, contraseña) {
    let retorno = null;
    for (let i = 0; i < colaboradores.length; i++) {
        if (colaboradores[i].username == user && colaboradores[i].pass == contraseña && colaboradores[i].estado == true) {
            retorno = colaboradores[i];
        }
    }
    return retorno;
}

/* Al recibir los atributos del objeto por parámetros se agrega a la lista colaboradores*/
function altaColaboradores(unNombre, unApellido, unUsername, unPass, unEstado) {
    let nuevoColaborador = new colaborador(unNombre, unApellido, unUsername, unPass, unEstado);
    colaboradores.push(nuevoColaborador);
    return nuevoColaborador;
}

/* Recibe los datos ingresados por el usuario, y verifica si existen para poder guardarlos. */
function tomarDatosColaboradoes() {

    let nombre = $("#txtNombre").val();
    let apellido = $("#txtApellido").val();
    let tmp_nombre = nombre.toLowerCase().trim();
    let temp_apellido = apellido.toLowerCase().trim();
    tmp_nombre = quitarAcentos(tmp_nombre);
    temp_apellido = quitarAcentos(temp_apellido);
    let user = tmp_nombre.charAt(0) + temp_apellido;
    let pass = tmp_nombre.charAt(0) + "-" + temp_apellido;
    let estado = true;

    if (nombre != "" && apellido != "") {
        if (verificarDatosColaboradores(user, colaboradores) == false) {
            let nuevo = altaColaboradores(nombre, apellido, user, pass, estado);
            $("#pColaborador").html(`Se creó el usuario: ${user}<br> Su contraseña es: ${pass}`);

        } else {
            let indice = 1;

            while (verificarDatosColaboradores(user + indice, colaboradores)) {
                indice++

            }

            let nuevo = altaColaboradores(nombre, apellido, user + indice, pass, estado);
            $("#pColaborador").html(`Se creó el usuario: ${user + indice}<br> Su contraseña es: ${pass}`);

        }

        $("#tablaUsuarios").hide();
        $("#tablaUsuarios").show();
        listarUsuariosColaboradores(colaboradores);
        $("#txtNombre").val("");
        $("#txtApellido").val("");

    } else {
        $("#pColaborador").html("Todos los campos son requeridos, Vuelve a intentar")
    }
}



/*Al recibir dos parametros los busca en la lista Colaboradores y sino lo encuentra retorna false */
function verificarDatosColaboradores(_user, unArray) {
    let retorno = false;

    for (let i = 0; i < unArray.length; i++) {
        if (unArray[i].username == _user) {
            retorno = true;
        }

    }
    return retorno;

}

/* Al recibir los atributos del objeto por parámetros se agrega a la lista recetas*/
function altaRecetas(unIdReceta, unAutor, unTitulo, unaFoto, unTiempo, unaElaboracion, unMegusta, unNoMeGusta) {
    let nuevaReceta = new receta(unIdReceta, unAutor, unTitulo, unaFoto, unTiempo, unaElaboracion, unMegusta, unNoMeGusta);
    recetas.push(nuevaReceta);
    ultimoIdReceta++;
    return nuevaReceta;
}

/* Recibe los datos ingresados por el usuario y se los envía a otra función para guardar los datos en una lista*/
function tomarDatosRecetas() {
    let titulo = $("#txtTitulo").val();
    let foto = $("#fileFoto").val().replace('C:\\fakepath\\', '');
    let tiempo = $("#txtTiempo").val();
    let elaboracion = $("#txtDescripcion").val();
    let MeGusta = 0;
    let noMeGusta = 0;
    let receta = altaRecetas(ultimoIdReceta, logueado, titulo, foto, tiempo, elaboracion, MeGusta, noMeGusta);

    $("#pReceta").html("Su receta se creó correctamente");
    $("#txtTitulo").val("");
    $("#fileFoto").val("")
    $("#txtTiempo").val("");
    $("#txtDescripcion").val("");
}

/* Recibe una lista (recetas) por parámetro y la muestra en una tabla */
function escribirRecetasEnPantalla(unaLista) {
    unaLista = unaLista.sort(rolUsuario);

    $("#muroRecetas").html("");

    for (let i = 0; i < unaLista.length; i++) {

        if (unaLista[i].autor.estado) {


            $("#muroRecetas").append(`<div>
                                    <h2>${unaLista[i].titulo}</h2>
                                    <h4>Rating: ${recetas[i].raiting = parseInt(((recetas[i].meGusta) * 100) / (recetas[i].meGusta + recetas[i].noMeGusta))} % | ${unaLista[i].autor.nombre}</h4>
                                    <img src="img/${unaLista[i].foto}" alt="Imagen no encontrada">
                                    <p class="duracion"><strong>${unaLista[i].tiempo}</strong> minutos</p>
                                    <p>
                                    ${unaLista[i].elaboracion}
                                    </p>
                                    <p class="likes">
                                    ${unaLista[i].meGusta}
                                    <button id="btnMg${unaLista[i].id}">Me Gusta</button>
                                    |
                                    <button id="btnNg${unaLista[i].id}">No me gusta</button>
                                    ${unaLista[i].noMeGusta} 
                                    </p>
                                    <hr>
                            </div>`)
            $("#btnMg" + unaLista[i].id).click(meGustear);
            $("#btnNg" + unaLista[i].id).click(noMeGustear);


        }
    }

}

/* Al presionar un boton se incrementa un contador y lo guarda en un atributo del objeto*/
function meGustear() {

    let id = this.id;
    let recetaBuscadaId = id.substring(5);

    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].id == recetaBuscadaId) {
            recetas[i].meGusta++;
        }
    }
    escribirRecetasEnPantalla(recetas);


}

/* Al presionar un boton se incrementa un contador y lo guarda en un atributo del objeto*/
function noMeGustear() {

    let id = this.id;
    let recetaBuscadaId = id.substring(5);

    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].id == recetaBuscadaId) {
            recetas[i].noMeGusta++;
        }
    }
    escribirRecetasEnPantalla(recetas);

}

/* Compara las recetas y las ordena según atributo del objeto */
function rolUsuario(a, b) {

    var dev;
    if (a.autor.rol > b.autor.rol) {
        dev = 1;
    }
    else {
        dev = -1;
    }
    return dev;


}

/* Recorre la lista colaboradores y muestra el contenido en una tabla con botones dinámicos */
function listarUsuariosColaboradores() {

    $("#tblUsuarios").html("");
    for (let i = 0; i < colaboradores.length; i++) {
        $("#tblUsuarios").append(`<tr>
                        <td>${colaboradores[i].nombre}</td>
                        <td>${colaboradores[i].apellido}</td>
                        <td>${colaboradores[i].username}</td>
                        <td>${colaboradores[i].pass}</td>
                        <td>${colaboradores[i].estado}</td>
                        <td><button id="des${colaboradores[i].username}">desactivar</button></td>
                        <td><button id="act${colaboradores[i].username}">activar</button></td></tr>`)
        $("#des" + colaboradores[i].username).click(desactivar);
        $("#act" + colaboradores[i].username).click(activar);

    }

    function activar() {

        id = this.id;
        username = id.substring(3);

        for (let i = 0; i < colaboradores.length; i++) {
            if (colaboradores[i].username == username) {
                colaboradores[i].estado = true;
            }
        }
        listarUsuariosColaboradores();
    }

    function desactivar() {

        id = this.id;
        username = id.substring(3);

        for (let i = 0; i < colaboradores.length; i++) {
            if (colaboradores[i].username == username) {
                colaboradores[i].estado = false;
            }
            listarUsuariosColaboradores();
        }
    }
}

/* Recorre la lista recetas y devuelve la que tiene el mayor tiempo de elaboración. */
function recetaMayorDuracion() {

    $("#bienvenida").hide();
    $("#muroRecetas").show();
    $("#altaReceta").hide();
    $("#altaColaborador").hide();
    $("#tablaUsuarios").hide();
    $("#divBtnVolver").show();
    $("#divRep2").hide();
    var recetaDeMayorDuracion = [];
    let mayorTiempo = 0;

    for (let i = 0; i < recetas.length; i++) {

        if (mayorTiempo < recetas[i].tiempo) {

            mayorTiempo = parseInt(recetas[i].tiempo);
        }
    }

    for (let i = 0; i < recetas.length; i++) {
        if (mayorTiempo == recetas[i].tiempo) {

            recetaDeMayorDuracion.push(recetas[i]);
        }
    }
    escribirRecetasEnPantalla(recetaDeMayorDuracion);
}

/* Muestra la interfaz para ingresar un valor númerico y mostrar en un párrafo*/
function mostrarDivReporte2() {
    $("#txtTiempoReporte2").val("");
    $("#pDadoUnTiempo").html("");
    $("#divRep2").show();
    $("#bienvenida").hide();
    $("#altaReceta").hide();
    $("#altaColaborador").hide();
    $("#tablaUsuarios").hide();
    $("#divBtnVolver").show();
    $("#muroRecetas").hide();
}

/* Al recibir un valor númerico devuelve cuantas recetas tardan menos y cuantas más de ese valor */
function reporteDadoUnTiempo() {

    let tiempoPedido = parseInt($("#txtTiempoReporte2").val());
    let crIgualTiempo = 0;
    let crMayorTiempo = 0;

    for (let i = 0; i < recetas.length; i++) {

        if (recetas[i].tiempo <= tiempoPedido) {
            crIgualTiempo++
        } else if (recetas[i].tiempo > tiempoPedido) {
            crMayorTiempo++
        }

    }

    $("#pDadoUnTiempo").html("Existen " + crIgualTiempo + " recetas de menor o igual tiempo, y " + crMayorTiempo + " que duran mas que eso.")

}

/* Recorre la lista recetas y devuelve las que tiene el valor más alto en el atributo rating. */
function reporteSegunRaiting() {
    $("#bienvenida").hide();
    $("#muroRecetas").show();
    $("#altaReceta").hide();
    $("#altaColaborador").hide();
    $("#tablaUsuarios").hide();
    $("#divBtnVolver").show();
    $("#divRep2").hide();
    let mayorRaiting = 0;
    var arrayMejorRaiting = [];

    for (let i = 0; i < recetas.length; i++) {

        if (parseInt(((recetas[i].meGusta) * 100) / (recetas[i].meGusta + recetas[i].noMeGusta)) > mayorRaiting) {

            mayorRaiting = parseInt(((recetas[i].meGusta) * 100) / (recetas[i].meGusta + recetas[i].noMeGusta))

        }
    }

    for (let i = 0; i < recetas.length; i++) {
        if (mayorRaiting == parseInt(((recetas[i].meGusta) * 100) / (recetas[i].meGusta + recetas[i].noMeGusta))) {

            arrayMejorRaiting.push(recetas[i]);
        }
    }

    escribirRecetasEnPantalla(arrayMejorRaiting);
}

function buscadorDeRecetasPrincipal() {

    let busqueda = buscadorRecetas(recetas);

}

/* Busca la palabra ingresada por el usuario en la lista recetas primero por el atributo titulo y luego por elaboración*/
function buscadorRecetas(_recetas) {
    $("#pMostrarNoResultBusqueda").html("");
    let textoIngresado = $("#txtBuscarReceta").val();
    textoIngresado = textoIngresado.toLowerCase().trim();
    textoIngresado = quitarAcentos(textoIngresado);
    var recetaEncontrada = [];

    for (let i = 0; i < _recetas.length; i++) {

        let tem_titulo = _recetas[i].titulo.toLowerCase().trim();
        tem_titulo = quitarAcentos(tem_titulo);

        let tem_elaboracion = _recetas[i].elaboracion.toLowerCase().trim();
        tem_elaboracion = quitarAcentos(tem_elaboracion);

        if (esSubcadena(tem_titulo, textoIngresado) && _recetas[i].autor.estado == true || esSubcadena(tem_elaboracion, textoIngresado) && _recetas[i].autor.estado == true) {
            recetaEncontrada.push(_recetas[i]);
        }

    }

    if (recetaEncontrada.length == 0) {
        $("#pMostrarNoResultBusqueda").html("No hay resultados que coincidan con la búsqueda: " + textoIngresado);
        escribirRecetasEnPantalla(recetaEncontrada);
    } else {
        escribirRecetasEnPantalla(recetaEncontrada);
    }
    $("#txtBuscarReceta").val("");
}

function quitarAcentos(string) {

    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* Recibe dos string y devuelve true si el segundo esta incluido en el primero. */
function esSubcadena(t1, t2) {

    let resultado = false
    let indice = t1.indexOf(t2);

    if (indice != -1) {
        resultado = true;
    }

    return resultado;
}

