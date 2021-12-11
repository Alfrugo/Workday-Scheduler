
// start when loaded

$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
  // moment.js
})


//select input add data 

$(".saveBtn").on('click', function(){
  var timeBlock = $(this).parent().attr("id");
  console.log ("this: " + this);
  console.log("Working on time block: " + timeBlock);

  var textArea = $(this).siblings(".description").val();
  console.log ("this: " + this);
  console.log ("This is the text area: " + textArea);

  localStorage.setItem(timeBlock, textArea); // added the load manually needs for loop
  //console.log ("localStorage= " + localStorage[timeBlock, textArea]);
})


// loads localStorage  and 24 hour to 12 hour conversion. needs for loop
    $("#h8 .description")
        .val(localStorage
        .getItem("h8"));
    console.log("h8="+h8);
    $("#h9 .description")
        .val(localStorage
        .getItem("h9"));
    $("#h10 .description")
        .val(localStorage
        .getItem("h10"));
    $("#h11 .description")
        .val(localStorage
        .getItem("h11"));
    $("#h12 .description")
        .val(localStorage
        .getItem("h12"));
    $("#h13 .description")
        .val(localStorage
        .getItem("h13"));
    $("#h14 .description")
        .val(localStorage
        .getItem("h14"));
    $("#h15 .description")
        .val(localStorage
        .getItem("h15"));
    $("#h16 .description")
        .val(localStorage
        .getItem("h16"));
    $("#h17 .description")
        .val(localStorage
        .getItem("h17"));


