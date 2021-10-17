$(document).ready(function () {
  $("#btnTulis").css("background-color", "green");
  $("#ulas").hide();

  // jika button ulas di klik
  $("#btnUlas").click(function () {
    $("#btnUlas").css("background-color", "green");
    $("#btnTulis").css("background-color", "transparent");
    $("#ulas").show();
    $("#tulis").hide();
  });

  // jika button tulis di klik
  $("#btnTulis").click(function () {
    $("#btnTulis").css("background-color", "green");
    $("#btnUlas").css("background-color", "transparent");
    $("#ulas").hide();
    $("#tulis").show();
  });
});
