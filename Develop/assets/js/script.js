// execute when the DOM is fully loaded.

$(document).ready(function () {
  // formats current day using moment to the desired format (Thursday, October 6th)
  // documentation lives here for moment: https://momentjs.com/

  var todaysDate = moment().format("dddd, MMMM Do");

  // this sets current date into p tag with id of currentDay
  $("#currentDay").text(todaysDate);
});
