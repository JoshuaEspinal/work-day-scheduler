// execute when the DOM is fully loaded.

$(document).ready(function () {
  // formats current day using moment to the desired format (Thursday, October 6th)
  // documentation lives here for moment: https://momentjs.com/

  var todaysDate = moment().format("dddd, MMMM Do");

  // this sets current date into p tag with id of currentDay
  $("#currentDay").text(todaysDate);
  var container = $(".container");

  // set an array of moment hours
  // this is a 24 hour clock so 13 would equal 1 pm, 14 equals 2pm
  // this array is from 9 am to 5pm on a 24 clock after formatting with moment
  var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
});