
new Vue({
    el: "#div-7",
    beforeCreate: function() {
        var _temp = "BEFORE CREATE: Inicialización de eventos e inicio del ciclo de vida de VUE.";
        console.log(_temp);
    },
    created: function() {
        var _temp = "CREATED: Inicialización de las injecciones y la reactividad.";
        console.log(_temp);
    },
    beforeMount: function() {
        var _temp = "BEFORE MOUNT: Asigna un elemento (el) a la instancia de VUE y se compila el template dentro de la función render";
        console.log(_temp);
    },
    mounted: function() {
        var _temp = "MOUNTED: Se crea el vm.$el y se sustituye por el elemento indicado en 'el'";
        console.log(_temp);
    },
    beforeUpdate: function() {
        var _temp = "BEFORE UPDATE: Antes de actualizar el data";
        console.log(_temp);
    },
    updated: function() {
        var _temp = "UPDATED: Renderizado y parcheado";
        console.log(_temp);
    },
    beforeDestroy: function() {
        var _temp = "BEDORE DESTROY: Antes de destruir todo (watchers, child, components y event listeners)";
        console.log(_temp);
    },
    destroyed: function() {
        var _temp = "DESTROYED: Destruido";
        console.log(_temp);
    }
});