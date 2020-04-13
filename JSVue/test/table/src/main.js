
/*

new Vue({
    el: '#appSelectedItems',
    
    data: {
        x: 0,
        y: 0,
        allItems: [
            {itemValues: [{ id: 1, description: 'Tacos', quantity: 0, price: 5.50, total: 0}]},
            {itemValues: [{ id: 2, description: 'Fajitas', quantity: 0, price: 2.00,total: 0}]},
            {itemValues: [{ id: 3, description: 'Baby Cow', quantity: 0, price: 20.00,total: 0}]}
        ],
        items: [
            {itemValues: [{ id: 1, description: 'Tacos', price: '5.50'}]},
            {itemValues: [{ id: 2, description: 'Fajitas', price: '2.00'}]},
            {itemValues: [{ id: 3, description: 'Baby Cow', price: '20.00'}]}
        ],
        counter: 0,
    },
    // asdf
    watch: {
        '{itemValues:item}': {
            handler (newValue, oldValue) {
                newValue.forEach((item) => {
                    item.total = item.quantity * item.price    
                });
            },
            deep: true
        }
    },
    //asdf
    methods: {
        AddItem(){
            this.items.push({
                description: '',
                quantity: '',
                price: 0,
                total: 0
            })
        },
        removeItem(){
            this.items.splice(this.items, 1)
        },
        decrease: function(item){
            item.counter--;
        },
        increase: function(item){
            item.counter++;
        },

        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },

        enterPressed: function() {
            alert('The Enter Button was pressed.')
        },
     CONVERT to? 
        function saveToFile(jsonData, filename) {
            let blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8;' })
            if (navigator.msSaveBlob) { // IE 10+
              navigator.msSaveBlob(blob, filename)
            } else {
              let link = document.createElement('a')
              if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                let url = URL.createObjectURL(blob)
                link.setAttribute('href', url)
                link.setAttribute('download', filename)
                link.style.visibility = 'hidden'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }
            }
          }
          
    }
}).$mount("#appSelectedItems"); 
*/
import MY_JSON from './json/data.json'
export default {
            myJson: json
}
new Vue({
    el: '#appItemList',
    data: {
        
    },
    computed: {

    },
    methods: {

    }

})