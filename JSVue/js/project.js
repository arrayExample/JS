new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        decrease: function(){
            this.counter--;
        },
        increase: function(){
            this.counter++;
        },

        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },

        enterPressed: function() {
            alert('The Enter Button was pressed.')
        },
    /* CONVERT to? 
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
          */
    }
});