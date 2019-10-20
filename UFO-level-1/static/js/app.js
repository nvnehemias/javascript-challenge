// from data.js
var tableData = data;

// YOUR CODE HERE!
// select tbody 
tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}


displayData(tableData)

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select(".btn")

button.on("click",function (){
    console.log("this is a test")
    console.log(dateInputText.property("value"));
    if (dateInputText.property("value") === "") {
        console.log(tableData)
        console.log(displayData(tableData))
    }
    else {
        var new_table = tableData.filter(sighting => sighting.datetime === dateInputText.property('value'))
        displayData(new_table)
    }
})



