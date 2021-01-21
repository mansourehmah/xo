$(document).ready(function () {
  //timer function
  setInterval(timeUpdate, 1000);
  function timeUpdate() {
    minute = $("#clock-minute").text();
    second = $("#clock-second").text();

    if (parseInt(second) === 59) {
      var newMin = (parseInt(minute) + 1).toString();
      if (newMin < 10) newMin = "0" + newMin;
      $("#clock-minute").text(newMin);
      $("#clock-second").text("00");
    } else {
      newSec = (parseInt(second) + 1).toString();
      if (newSec < 10) newSec = "0" + newSec;
      $("#clock-second").text(newSec);
    }
  }

  //Whose turn is it?
  turn = 0;
  align = "x";
  function whoseTurn() {
    if (turn) {
      align = "x";
      turn--;
    } else {
      align = "o";
      turn++;
    }
    console.log(turn);
  }

  //add shape
  $(".xo-main li").click(function () {
    $(this).text(align);
    whoseTurn();
  });
});
