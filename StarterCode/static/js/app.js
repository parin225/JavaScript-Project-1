// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

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

    // Select the input date
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    
    // Get the value property from the input date
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    // Filter out the date typed in the form with the date in the data
    var filteredData = tableData.filter(date => date.datetime === inputDateValue);
    var filteredData2 = tableData.filter(city => city.city === inputCityValue);
    var filteredData3 = tableData.filter(state => state.state === inputStateValue);
    // var filteredData = tableData.filter(country => country.country === inputCountryValue);
    // var filteredData = tableData.filter(shape => shape.shape === inputShapeValue);

    // Print the filteredData into the console 
    // console.log(filteredData);
    // console.log(filteredCityData);
    // console.log(filteredStateData);
    // console.log(filteredCountryData);
    // console.log(filteredShapeData);

    tableData = filteredData;
    tableData = filteredData2;
    tableData = filteredData3;
    
    rendertable();



});


rendertable();

