
new Vue({
    el: "#div-4",
    data: {
        tareas: [],
        newTarea: null
    },
    methods: {
        addTarea: function() {
            if (this.newTarea !== null) {
                this.tareas.unshift(this.newTarea);
                this.newTarea = null;
            }
        }
    }
});
