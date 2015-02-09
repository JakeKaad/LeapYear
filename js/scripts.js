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
    var setNotClass = function() {
      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }
    };

    $(".year").text(year);
    setNotClass();

    $("#result").show();
    event.preventDefault();
  });
});
