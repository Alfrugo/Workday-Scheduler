
// start when loaded

$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // moment.js



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


  // loads localStorage  
  for (let i = 8; i <= 17; i++) {
    $("#h" + i + " .description")
      .val(localStorage
        .getItem("h" + i));
  }

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