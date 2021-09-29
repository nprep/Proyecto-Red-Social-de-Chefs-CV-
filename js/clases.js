class receta {
    constructor(unIdReceta, unAutor, unTitulo, unaFoto, unTiempo, unaElaboracion,UnMeGusta,unNoMeGusta) {
        this.id = unIdReceta;
        this.autor = unAutor;
        this.titulo = unTitulo;
        this.foto = unaFoto;
        this.tiempo = unTiempo;
        this.elaboracion = unaElaboracion;
        this.meGusta = UnMeGusta;
        this.noMeGusta = unNoMeGusta;
        this.raiting = 0;

    }
}

class colaborador {
    constructor(unNombre, unApellido, unUsername, unPass, unEstado) {
        this.nombre = unNombre;
        this.apellido = unApellido;
        this.username = unUsername;
        this.pass = unPass;
        this.estado = unEstado;
        this.rol = "colaborador"

    }
}

class administrador {
    constructor(unNombre, unApellido, unUsername, unPass) {
        this.nombre = unNombre;
        this.apellido = unApellido;
        this.username = unUsername;
        this.pass = unPass;
        this.estado = true;
        this.rol = "administrador"
    }
}