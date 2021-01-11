
new Vue({
    el: "#div-10",
    data: {
        url: "https://randomuser.me/api/?results=",
        totalRegistros:300,
        personas: []
    },
    mounted: function() {
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas: function() {
            this.$http.get(this.url + this.totalRegistros)
                .then(function(response) {
                    this.personas = response.body.results;
                });
        }
    }
});
