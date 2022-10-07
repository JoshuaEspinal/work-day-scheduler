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
    // we append our div to our div with the class of container
    container.append(dynamicDiv);
    // here we add classes we need to this div
    dynamicDiv.addClass("time-block row");
    // we nest our span inside of our new div
    dynamicDiv.append(dynamicSpan);
    // we add the hour class to style this span
    dynamicSpan.addClass("hour");
    // here we set the text of our span to be the formatted version of each item inside the array
    dynamicSpan.text(formatBusinessHours);
    // we nest our textarea inside the div to match the structure of line 41 - 47
    dynamicDiv.append(dynamicTextArea);
    // here we add a conditional to render the correct class name
    if (isHourBefore) {
      // if the time is  before
      dynamicTextArea.addClass("past");
    } else if (isHourAfter) {
      // if the time is after
      dynamicTextArea.addClass("future");
    } else {
      // or any other time (which would be this current hour)
      dynamicTextArea.addClass("present");
    }
    // now we add a dynamic data attribute in order to determine
    // which text input is which based on the index of the array
    // note the index for each item is [0, 1, 2, 3, 4, 5, 6, 7]
    dynamicTextArea.attr("data", `data-textarea-${index}`);
    // now we set the textarea value to be a value we retrieve from localstorage
    // or it will be initially empty
    dynamicTextArea.val(
      localStorage.getItem("data-textarea" + `-${index}`) || ""
    );
    // now we add our button into our time-block row div
    dynamicDiv.append(dynamicButton);

    // we add our class to get the right styling
    dynamicButton.addClass("saveBtn");
    // we add a class from font-awesome to get the save icon here
    // https://fontawesome.com/v3/icon/save
    dynamicIcon.addClass("fa fa-save");
    // now we nest the icon inside the button
    dynamicButton.append(dynamicIcon);
  });
});
