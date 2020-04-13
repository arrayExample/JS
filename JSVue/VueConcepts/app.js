// START Vue Modal 1 / Vue
var vm1 = new Vue ({
    el: '#app1',
    data: {
        title: "the vue js instance",
        showParagraph: false
    },
// Vue JS cycle
    beforeCreate: function() {
        console.log('beforeCreate()');
    },
    created: function() {
        console.log('created()');
    },
    beforeMount: function() {
        console.log('beforeMount()');
    },
    mounted: function() {
        console.log('mounted()');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate()');
    },
    updated: function() {
        console.log('updated()');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy()');
    },
    destroyed: function() {
        console.log('destroyed()');
    },
    methods: {
        destroy: function() {
            this.$destroy();
        },
        show: function() {
            this.showParagraph = true;
            this.updateTitle('the NEW vue js instance')
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title){
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.toLowerCase();
        }
    },
    watch: {

    }
});
// END Vue Modal 1 / Vue

// START External/vanilla JS
/*
setTimeout(function() {
    vm1.title = 'Changed by timer';
    vm1.show();
}, 3000);
*/
// END External/vanilla JS

// START Vue Modal 2 / Vue
var vm2 = new Vue ({
    el: '#app2',
    data: {
        title: 'the SECOND vue instance'
    },
    methods: {
        onChange: function() {
            vm1.title = 'changed from the second vue';
        }
    },
    computed: {

    },
    watch: {

    }
});
// END Vue Modal 2 / Vue

// START Vue Modal 3 / Vue
var vm3 = new Vue ({
    el: '#app3',
    template: '<h1>Hello!</h1>'
});
// END Vue Modal 3 / Vue