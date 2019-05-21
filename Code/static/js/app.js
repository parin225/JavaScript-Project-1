// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// render the table onto the webpage 
function rendertable() {
    tbody.text("")
    tableData.forEach(function(ufoSighting) {
        var row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key, value]) {
        var cell = row.append("td").text(value)
        cell.text(value);
    });
})};

// Select the filter table button
var submit = d3.select(".btn-default");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

     // Select the input from all the filters available 
     var inputDate = d3.select("#datetime");
     var inputCity = d3.select("#city");
     var inputState = d3.select("#state");
     var inputCountry = d3.select("#country");
     var inputShape = d3.select("#shape");

    // Get the value property from the inputs and change it to lowercase to match the dataset 
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value").toLowerCase();
    var inputStateValue = inputState.property("value").toLowerCase();
    var inputCountryValue = inputCountry.property("value").toLowerCase();
    var inputShapeValue = inputShape.property("value").toLowerCase();

        // filter the tableData and extract the variables needed from the data
       tableData = tableData.filter(function(ufoInfo){
        var filteredDate = ufoInfo.datetime;
        var filteredCity = ufoInfo.city;
        var filteredState = ufoInfo.state;
        var filteredCountry = ufoInfo.country;
        var filteredShape = ufoInfo.shape;

        // conduct an if statement to be able to filter on multiple categories on the webpage 
        if (
            (filteredDate === inputDateValue || inputDateValue === "" ) &&
            (filteredCity=== inputCityValue ||inputCityValue === "") &&
            (filteredState === inputStateValue || inputStateValue === "") &&
            (filteredCountry === inputCountryValue || inputCountryValue === "") &&
            (filteredShape === inputShapeValue || inputShapeValue === "")
         ){
             return true;
        }
        return false;
    });
    
    rendertable();

});

rendertable();
