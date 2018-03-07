// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredAddresses to addressData initially
// addressData comes from the addressData.js file
var filtered_date = dataSet;

// renderTable renders the filtered_data to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filtered_date.length; i++) {
    // Get get the current address object and its fields
    var date_time = filtered_date[i];
    var fields = Object.keys(date_time);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date_time[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing the / and replacing with no spaces 
  var filter_datetime = $dateInput.value.replace("/", "");

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filtered_date = dataSet.filter(function(date_time) {
    var data_datetime = date_time.datetime.replace("/", "");

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return data_datetime === filter_datetime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();