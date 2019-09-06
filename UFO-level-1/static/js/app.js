// from data.js
var tableData = data;

// YOUR CODE HERE!

//Print data in the console
console.log(data)

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((data_info) => {
    console.log(data_info);
    var row = tbody.append("tr");
    Object.entries(data_info).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
});