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
  //   loop through moment business hours array because we want to dynamically create a time block
  // for each item inside of this array
  businessHours.forEach(function (hour, index) {
    // here we are converting each hour to be am or pm -
    // refer to moment docs to find this format (o so like..)
    var formatBusinessHours = moment().hour(hour).format("h A");
    // here we are checking if the hour we are currently indexed at is BEFORE current time
    var isHourBefore = moment().hour(hour).isBefore(moment());
    // here we are checking if the hour we are currently indexed at is AFTER current time
    var isHourAfter = moment().hour(hour).isAfter(moment());

    // here we are generating dynamic elements using jquery
    var dynamicDiv = $("<div>");
    var dynamicSpan = $("<span>");
    var dynamicTextArea = $("<textarea>");
    var dynamicButton = $("<button>");
    var dynamicIcon = $("<i>");

    // we want the structure for each time block to look like this

    /* 
          <div class='time-block row'>
              <span class='hour'></span>
              <textarea class='past/future/present'></textarea>
              <button class='saveBtn'>
                  <i class='fa fa-save'></i>
              </button>
          </div>
          */
  });
});
