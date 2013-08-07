var slider_positions = {};

$(document).ready(function() {
  SetUpSliders();
});

function SetUpSliders() {
  var sliders = $(".contentSlider");
  sliders.each(function() {
    var slider = $(this)
    var slider_width = slider.width();
    slider.html("<div class=\"contentSlider_inner cf\">" + 
                 slider.html() + "</div>");
    var inner = slider.children(".contentSlider_inner");
    var slides = inner.children(".contentSlide");
    inner.width(slides.length*100 + "%");
    slides.each(function(index) {
      $(this).width(100/slides.length + "%");
    });
    slider_positions[slider] = 0;

    var slider_left_buttons = slider.find(".triggerSlideLeft");
    slider_left_buttons.click(function() {
      GoToSlide(slider, slider_positions[slider]-1);
    });

    var slider_right_buttons = slider.find(".triggerSlideRight");
    slider_right_buttons.click(function() {
      GoToSlide(slider, slider_positions[slider]+1);
    });
  });
}

// Slide numbers are zero-indexed.
function GoToSlide(slider, slide_number) {
  var inner = slider.children(".contentSlider_inner");
  var slides = inner.children(".contentSlide");
  if (slide_number >= slides.length || slide_number < 0) {
    return;
  }
  var offset = "-" + 100*slide_number + "%";
  inner.animate({left: offset}, 400, function() {
    slider_positions[slider] = slide_number;
  });
}