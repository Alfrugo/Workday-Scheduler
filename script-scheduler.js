
// start when loaded
$(document).ready(function () {

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));   // moment.js


// loads localStorage  and build html time rows
for (let i = 8; i <= 17; i++) {

  var hourDisplay = i + " am";
  if (i > 12) {hourDisplay = i-12 + " pm"}
    
  var timeBlock = document.querySelector("#container");
  var rowEl = document.createElement("div");
  rowEl.className = "row time-block";
  rowEl.id = "h" + i;
  timeBlock.appendChild(rowEl);

  var hourBlock = document.querySelector("#h" + i);
  var hourEl = document.createElement("div");
  hourEl.className = "hour";
  hourEl.textContent = hourDisplay;
  hourBlock.appendChild(hourEl);

  var descriptionBlock = document.querySelector("#h" + i);
  var descriptionEl = document.createElement("textarea");
  descriptionEl.className = "description";
  descriptionBlock.appendChild(descriptionEl);

  var btnBlock = document.querySelector("#h" + i);
  var btnEl = document.createElement("button");
  btnEl.className = "saveBtn";
  btnEl.textContent = "S";
  btnBlock.appendChild(btnEl);


  $("#h" + i + " .description")
    .val(localStorage
    .getItem("h" + i));

}

  //select input add data 

  $(".saveBtn").on('click', function () {
    var timeBlock = $(this).parent().attr("id");
    console.log("this: " + this);
    console.log("Working on time block: " + timeBlock);

    var textArea = $(this).siblings(".description").val();
    console.log("this: " + this);
    console.log("This is the text area: " + textArea);

    localStorage.setItem(timeBlock, textArea); // added the load manually needs for loop
    //console.log ("localStorage= " + localStorage[timeBlock, textArea]);
  })


  function colorHour() {
    //get current number of hours.
    var currentHour = moment().hour();
    console.log(currentHour);

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("h")[1]);
      console.log(blockHour, currentHour)
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  colorHour();

})