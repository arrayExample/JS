var transactionTableRef = document.getElementById('transactionTable');
var newRow = transactionTableRef.insertRow();
var newCell = newRow.insertCell(0);
var newText = document.createTextNode('new row');
newCell.appendChild(newText);

/*var addItemTableRef = document.getElementById('addItemTable');
var newRow = addItemTableRef.insertRow();
var newCell = newRow.insertCell(0);
var newText = document.createTextNode('');
newCell.appendChild(newText);*/

var descriptionData = document.getElementById('uPCData');

var list = [
 { "UPC": "0001",
  "Description": "Potatoes",
   "Price": "$13.22"}
];
descriptionData.innerHTML = JSON.stringify(list[0])
/*
var addItemTableRef = document.getElementById('addItemTable');
var obj = JSON.parse('{ "UPC": "0001", "Description": "Potatoes", "Price": "$13.22"}');
var newRow = addItemTableRef.insertRow();
var newCell = newRow.insertCell(0);
var rowIndex = 1;
var cellIndex = 1;
document.getElementById('addItemTable').rows[rowIndex].cells[rowIndex] = obj.UPC;
document.getElementById('addItemTable').rows[1].cells[2] = obj.description;
document.getElementById('addItemTable').rows[1].cells[3] = obj.price;

*/
function constructTable(selector) {
    // Getting the all column names
    var cols = Headers(list, selector);
    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
        var row = $('<tr/>');
        for (var colIndex = 0; colIndex < cols.length; colIndex++)
        {
            var val = list[i][cols[colIndex]];
            // If there is any key, which is matching
            // with the column name
            if (val == null) val = "";
                row.append($('<td/>').html(val));
        }
        // Adding each row to the table
        $(selector).append(row);
    }
}
function Headers(list, selector) {
var columns = [];
var header = $('<tr/>');
for (var i = 0; i < list.length; i++) {
    var row = list[i];

    for (var k in row) {
        if ($.inArray(k, columns) == -1) {
            columns.push(k);

            // Creating the header
            header.append($('<th/>').html(k));
        }
    }
}
// Appending the header to the table
$(selector).append(header);
    return columns;
}

var modalButtons = [...document.querySelectorAll(".button")];
modalButtons.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeButtons = [...document.querySelectorAll(".close")];
closeButtons.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}