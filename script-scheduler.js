
// start when loaded

//select input add data 

$(".saveBtn").on('click', function(){
  var timeBlock = $(this).parent().attr("id");
  console.log ("this: " + this);
  console.log("Working on time block: " + timeBlock);

  var textArea = $(this).siblings(".description").val();
  console.log ("this: " + this);
  console.log ("This is the text area: " + textArea);

  localStorage.setItem(timeBlock, textArea); // not working yet
  console.log ("localStorage= " + timeBlock.localStorage)
})