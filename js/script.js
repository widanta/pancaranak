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

  // seleksi dulu window
  $(window).scroll(() => {
    // selksi scroll ke atas
    const scroll = $(window).scrollTop();

    // jika tinggi scroll lewat dari 300 tampilkan bg
    if (scroll >= 950) {
      $("#navBg").css("background-color", "#d4d4d4");
    } else {
      $("#navBg").css("background-color", "transparent");
    }
  });
});
