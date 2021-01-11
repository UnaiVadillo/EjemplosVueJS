
new Vue({
    el: "#div-6",
    data: {
        puntuacion: 0,
        peliculas: [{
            titulo: "Indiana Jones y el templo maldito",
            genero: "Aventuras",
            puntuacion: 2
        }, {
            titulo: "Indiana Jones y el arca perdida",
            genero: "Aventuras",
            puntuacion: 10
        }, {
            titulo: "Indiana Jones y la última cruzada",
            genero: "Aventuras",
            puntuacion: 5
        }, {
            titulo: "Indiana Jones y la calavera de cristal",
            genero: "Aventuras",
            puntuacion: 8
        }, {
            titulo: "Los goonies",
            genero: "Aventuras",
            puntuacion: 3
        }],
        buscarComunidad: "",
        comunidades: [
            "Andalucía",
            "Aragón",
            "Principado de Asturias",
            "Baleares",
            "Canarias",
            "Cantabria",
            "Castilla-La Mancha",
            "Castilla y León",
            "Cataluña",
            "Extremadura",
            "Galicia",
            "La Rioja",
            "Comunidad de Madrid",
            "Región de Murcia",
            "Comunidad Foral de Navarra",
            "País Vasco",
            "Comunidad Valenciana"
        ]
    },
    computed: {
        mostrarMinimaPuntuacion: function() {
            var _this = this;
            return this.peliculas.filter(function(pelicula) {
                return pelicula.puntuacion >= _this.puntuacion;
            })
        },
        filtroComunidades: function() {
            var _this = this;
            return this.comunidades.filter(function(com) {
                return com.indexOf(_this.buscarComunidad) >= 0;
            })
        }
    }
});
