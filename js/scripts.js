$(document).ready(function() {
  var userItems = [];

  $("#cart").click(function() {
    var item = $("#items").val();
    userItems.push(item);
    event.preventDefault();
  });

  //
  $("form").submit(function(){
    //Hide form and show hidden list
    userItems.sort();
    userItems.forEach(function(item) {
      $('ul').append("<li>" + item + "</li>")
    });
    $("ul").show();
    $("form").hide();
    event.preventDefault();
  });
});
