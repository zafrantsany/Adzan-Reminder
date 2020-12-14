var on_switch = "selected";
var off_switch = "not_selected";

function swap() {
  var temp = on_switch;
  on_switch = off_switch;
  off_switch = temp;
  $("#switch_on").attr('class', on_switch);
  $("#switch_off").attr('class', off_switch);
  ($("#state").html() == "on") ? $("#state").html("off") : $("#state").html("on");
}

$(document).ready(function() {
  $(".flex a").click(function() {
    swap();
  });
});
