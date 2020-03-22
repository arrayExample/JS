
require(["dojo/on", "dojo/dom", "dojo/dom-style", "dojo/mouse", "dojo/domReady!"],
    function(on, dom, domStyle, mouse) {
        var myButton = dom.byId("myButton"),
            myDiv = dom.byId("myDiv");

        on(myButton, "click", function(evt){
            domStyle.set(myDiv, "backgroundColor", "blue");
        });
        on(myDiv, mouse.enter, function(evt){
            domStyle.set(myDiv, "backgroundColor", "red");
        });
        on(myDiv, mouse.leave, function(evt){
            domStyle.set(myDiv, "backgroundColor", "");
        });
});

require(["dojo/on", "dojo/dom", "dojo/query", "dojo/domReady!"],
    function(on, dom){

        var myObject = {
            id: "myObject",
            onClick: function(evt){
                alert("The scope of this handler is " + this.id);
            }
        };
        var div = dom.byId("parentDiv");
        on(div, ".clickMe:click", myObject.onClick);

});

require(["dojo/dom"], function(dom){
    var n = dom.byId("addItemButton");
    if (n) {
        console.log("Add Item button was found");
    } else {
        console.log("Add Item button Not found.");
    }
});


require(["dojo/dom-construct", "dojo/dom", "dojo/on",  "dojo/domReady!"],
    function(domConstruct, dom, on) {
        var theButton = function(addItemButton){
        addItemButton = dom.byId("addItemButton");
            on(addItemButton, "click", function(){
                //var row = domConstruct.toDom("<tr><td>Description</td><td>Price</td></tr>");
                domConstruct.place("<div><table><thead><tr><th>A New TAble...</th></tr></thead></table></div>","tableDiv","after");
            });
        };
});