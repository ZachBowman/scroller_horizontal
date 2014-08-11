// Smooth Horizontal Scrolling Animation
// Zach Bowman 2014

// Set the contents via html.

// #scroller
// - is the outside scroll area
// - must have position: relative.
// - must have overflow: hidden

// #scroll_inside
// - is the inner div, which contains the content.
// - must have position: absolute
// - must have left: 0, but no value for right
// - must have a fixed pixel width
// - must be at least the width of #scroller, or there will be a noticeable pop-in on the left side.

$(document).ready (function ()
  {
  var scroll_area_width    = document.getElementById ("scroller").offsetWidth;
  var scroll_element_width = document.getElementById ("scroll_inside").offsetWidth;

  $("#scroll_inside").clone().appendTo ("#scroller").attr ("id", "scroll_inside2");
  $("#scroll_inside2").css ("left", 0 - scroll_element_width);

  window.setInterval (function ()
    {
    scroll ("#scroll_inside")
    scroll ("#scroll_inside2")
    }, 1);

  function scroll (element)
    {
    var x = parseInt ($(element).css ("left"));
    x += 1;
    if (x > scroll_area_width)
      {
      x -= (scroll_element_width * 2);
      }
    $(element).css ("left", x);
    }
  });
