
new Vue({
    el: "#div-11",
    data: {
        url: "https://randomuser.me/api/?results=",
        totalRegistros: 500,
        personas: []
    },
    mounted: function() {
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas: function() {
            var _this = this;
            axios.get(this.url + this.totalRegistros)
                .then(function(response) {
                    _this.personas = response.data.results;
                });
        }
    }
});