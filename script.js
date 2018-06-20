//set variables
// identify actions or "events"
//attach the event to the input/name element

var nameTagInput = document.getElementById("name");
var nameTagDisplay = document.getElementById("nameDisplay");

nameTagInput.addEventListener('keyup', function(event) {
  var currentName = nameTagInput.value;
  nameTagDisplay.innerText = currentName;
});


