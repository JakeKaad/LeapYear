var leapYear = function(year) {

  var byFourHundred = (year % 400 === 0);
  var byOneHundred = (year % 100 === 0);
  var byFour = (year % 4 === 0);

  if ((byFourHundred) || ((!byOneHundred) && (byFour))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
