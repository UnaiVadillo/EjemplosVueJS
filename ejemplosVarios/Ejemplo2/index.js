
new Vue({
    el: "#div-2",
    data: {
        showIF: true,
        showSHOW: true
    },
    methods: {
        estado: function() {
            this.showIF = !this.showIF;
            this.showSHOW = !this.showSHOW;
        }
    }
});