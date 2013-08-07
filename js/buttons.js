$(document).ready(function() {
  SetUpButtons();
});

function SetUpButtons() {

  var buttons = $(".button");

  // Set up the HTML for the buttons.
  buttons.each(function() {
    var text = $(this).text();
    $(this).html("<span>" + text + 
                 "</span>");
  })

  SetUpRelocateButtons();
}

function SetUpRelocateButtons() {
  var relocate_buttons = $(".relocateButton");
  if (relocate_buttons.length == 0) {
    return;
  }

  // Set up the HTML for the arrow buttons
  relocate_buttons.each(function() {
    var direction = "";
    var animate_enter = {};
    var animate_exit = {};

    if ($(this).hasClass("relocateUp")) {
      direction = "up";
      animate_enter = {opacity: 1.0, top: "-=5"};
      animate_exit = {opacity: 0.5, top: "+=5"};
    } else if ($(this).hasClass("relocateRight")) {
      direction = "right";
      animate_enter = {opacity: 1.0, left: "+=5"};
      animate_exit = {opacity: 0.5, left: "-=5"};
    } else if ($(this).hasClass("relocateDown")) {
      direction = "down";
      animate_enter = {opacity: 1.0, top: "+=5"};
      animate_exit = {opacity: 0.5, top: "-=5"};
    } else if ($(this).hasClass("relocateLeft")) {
      direction = "left";
      animate_enter = {opacity: 1.0, left: "-=5"};
      animate_exit = {opacity: 0.5, left: "+=5"};
    }
    $(this).append("<img src=\"images/button_arrow_" + direction + ".png\"/>");
    
    var hover_enter = function() {
      var arrow = $(this).children("img");
      arrow.animate(animate_enter, 100);
    }
    var hover_exit = function() {
      var arrow = $(this).children("img");
      arrow.animate(animate_exit, 100);
    }
    $(this).hover(hover_enter, hover_exit);
  });
}