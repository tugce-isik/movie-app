$(document).ready(function () {
  $("#searchin").on("change keypress", function () {
    if ($("#searchin").val().length > 3) {
      $.ajax({
        url: "http://www.omdbapi.com",
        method: "GET",
        data: { apikey: "a9e2762d", s: $("#searchin").val() },
        cache: false,
        dataType: "json",
      }).done(function (data) {
        $("ul.search-result").html("");
        $.each(data.Search, function (key, val) {
          console.log(val);
          $("ul.search-result").append(
            "<li class='col-md-3 float-left'><div> <img style='max-width:100%;' src='" +
              val.Poster +
              "'/> </div> <div>Title: " +
              val.Title +
              " </div> <div>Year: " +
              val.Year +
              "</div> <div>Type: " +
              val.Type +
              "</div> <div class='float-right like-img' id='slike'> <img src='image/like.png' /> </div> <div class='float-right heart-img' id='sheart' style='display:none; left:17px;'> <img src='image/heart.png' /> </div></div> </li>"
          );
        });
      });
    }
  });

  $("ul.search-result #slike").click(function () {
    $("ul.search-result #sheart").show();
    /*$("ul.favorites-result").append(
      "<li class='col-md-3 float-left'><div> <img style='max-width:100%;' src='" +
        val.Poster +
        "'/> </div> <div>Title: " +
        val.Title +
        " </div> <div>Year: " +
        val.Year +
        "</div> <div>Type: " +
        val.Type +
        "</div> <div class='float-right like-img' id='slike' style='display:none;'> <img src='image/like.png' /> </div> <div class='float-right heart-img' id='sheart' style='left:17px;'> <img src='image/heart.png' /> </div></div> </li>"
    );*/
  });



  /* $(".heart-img").hide();
  $(".like-img").click(function () {
    $(".heart-img").show();
    $(".heart-img").css("right", "19px");
  });
  $(".heart-img").click(function () {
    $(".like-img").css("left", "-19px");
    $(this).hide();
    $(".like-img").show();
  });*/
});
