// execute when the DOM is loaded 

$(document).ready(function () {

    var container = $('.container');

    for (var i = 1; i < 9; i++) {
        console.log(i);
        container.append(`<div class="time-block">
        <div class="row">
          <div class="hour">
            <span class="my-2 mx-2">9AM</span>
          </div>
          <textarea id="9AM" class="past"></textarea>
          <button id="9AM-btn" class="saveBtn">
            <i class="fa fa-regular fa-lock"></i>
          </button>
        </div>
      </div>`)
    }
    // read from localstorage and set to textarea value
    $("#9AM").val(localStorage.getItem("9AM") || "");
    // formats current day using moment
  var todaysDate = moment().format("dddd, MMMM Do");

  console.log(todaysDate);

  // this sets current date into p tag with id of currentDay
  $("#currentDay").text(todaysDate);

  $("#9AM-btn").click(function () {
    var nineAmTextArea = $("#9AM").val();
    console.log(nineAmTextArea);
    localStorage.setItem("9AM", nineAmTextArea);
  });
});
