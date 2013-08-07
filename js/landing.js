var autoscrolling = false;

$(document).ready(function() {
  SetUpNavPitch();
  $(window).resize(function() {
    $("#pitch_1").css('min-height', $(window).height());
  })
  $(window).resize();
});

function SetUpNavPitch() {
  $(".triggerGoPitch1").click(function() {
    ScrollToPitchSection(1);
  });
  $(".triggerGoPitch2").click(function() {
    ScrollToPitchSection(2);
  });
  $(document).scroll(function() {
    if (autoscrolling)
      return;
    var curr_scroll_position = $(document).scrollTop() + $(window).height()/2.0;
    UpdateScroll(curr_scroll_position, 1);
    UpdateScroll(curr_scroll_position, 2);
  });
  $(document).scroll();
}

function ScrollToPitchSection(section_number) {
  autoscrolling = true;
  // Scroll to corresponding section.
  $("html, body").animate(
      {scrollTop: $("#pitch_" + section_number).position().top}, 
      400,
      function() {
        autoscrolling = false;
        $(document).scroll();
      });
}

function UpdateScroll(scroll_position, pitch_no) {
  var pitch_element = $("#pitch_" + pitch_no);
  var nav_pitch_item = $("#nav_pitch .triggerGoPitch" + pitch_no);
  var pitch_item_image = nav_pitch_item.children("img");
  if (scroll_position > pitch_element.position().top &&
      scroll_position < pitch_element.position().top 
                        + pitch_element.height()) {
    pitch_item_image.attr("src", 
        pitch_item_image.attr("src").replace("white", "orange"));
    nav_pitch_item.addClass("navCurrent");
  }
  else {
    pitch_item_image.attr("src", 
        pitch_item_image.attr("src").replace("orange", "white"));
    nav_pitch_item.removeClass("navCurrent");
  }

}