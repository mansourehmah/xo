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
  tableArrey = [];
  endgame = 0;
  $('.turn span').text(align)
  function whoseTurn() {
    if (turn) {
      align = "x";
      turn--;
    } else {
      align = "o";
      turn++;
    }
    $('.turn span').text(align)
    console.log(tableArrey);
  }

  //add shape
  $(".xo-main li").click(function () {
    if (tableArrey[$(this).index()] == undefined) {
      $(this).text(align);
      tableArrey[$(this).index()] = align;
      winner();
    }
  });

  //   winner function
  function winner() {
    for (i = 0; i < 3; i++) {
      if (
        tableArrey[3 * i] == tableArrey[3 * i + 1] &&
        tableArrey[3 * i] == tableArrey[3 * i + 2] &&
        tableArrey[3 * i] != undefined
      ) {
        $(".xo-main li")
          .eq(3 * i)
          .addClass("win");
        $(".xo-main li")
          .eq(3 * i + 1)
          .addClass("win");
        $(".xo-main li")
          .eq(3 * i + 2)
          .addClass("win");
        endgame++;
      }
      if (
        tableArrey[i] == tableArrey[i + 3] &&
        tableArrey[i] == tableArrey[i + 6] &&
        tableArrey[i] != undefined
      ) {
        $(".xo-main li").eq(i).addClass("win");
        $(".xo-main li")
          .eq(i + 3)
          .addClass("win");
        $(".xo-main li")
          .eq(i + 6)
          .addClass("win");
        endgame++;
      }
      if (
        tableArrey[3 * i] == tableArrey[3 * i + 1] &&
        tableArrey[3 * i] == tableArrey[3 * i + 2] &&
        tableArrey[3 * i] != undefined
      ) {
        $(".xo-main li")
          .eq(3 * i)
          .addClass("win");
        $(".xo-main li")
          .eq(3 * i + 1)
          .addClass("win");
        $(".xo-main li")
          .eq(3 * i + 2)
          .addClass("win");
        endgame++;
      }
    }
    if (
      tableArrey[0] == tableArrey[4] &&
      tableArrey[0] == tableArrey[8] &&
      tableArrey[0] != undefined
    ) {
      $(".xo-main li").eq(0).addClass("win");
      $(".xo-main li").eq(4).addClass("win");
      $(".xo-main li").eq(8).addClass("win");
      endgame++;
    }
    if (
      tableArrey[2] == tableArrey[4] &&
      tableArrey[2] == tableArrey[6] &&
      tableArrey[2] != undefined
    ) {
      $(".xo-main li").eq(2).addClass("win");
      $(".xo-main li").eq(4).addClass("win");
      $(".xo-main li").eq(6).addClass("win");
      endgame++;
    }
    if (endgame > 0) {
      $(".winner").addClass("goTop");
      $(".winner span").text(align);
    }
    if (endgame == 0) {
      whoseTurn();
    }
  }
  $(".winner button").click(function () {
    location.reload();
  });  
});
