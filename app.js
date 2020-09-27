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
          //console.log(val);
          $("ul.search-result").append(
            "<li class='col-md-3 float-left'><div> <img style='max-width:100%;' src='" +
              val.Poster +
              "'/> </div> <div>Title: " +
              val.Title +
              " </div> <div>Year: " +
              val.Year +
              "</div> <div>Type: " +
              val.Type +
              "</div> <div> imdbID: " +
              val.imdbID +
              "</div> <div class='float-right like-img' > <img src='like.png' id=" +
              val.imdbID +
              " /> </div> <div class='float-right heart-img' style='left:17px;'> <img style='display:none;' src='heart.png' id=" +
              val.imdbID +
              "s" +
              " /> </div></div> </li>"
          );
          $(".search-result #" + val.imdbID).click(function () {
            $("#" + val.imdbID + "s").show();
            if ($(".favorites-result #" + val.imdbID).length) {
            } else {
              $("ul.favorites-result").append(
                "<li class='col-md-3 float-left' id=" +
                  val.imdbID +
                  "l" +
                  " ><div> <img style='max-width:100%;' src='" +
                  val.Poster +
                  "'/> </div> <div>Title: " +
                  val.Title +
                  " </div> <div>Year: " +
                  val.Year +
                  "</div> <div>Type: " +
                  val.Type +
                  "</div> <div> imdbID: " +
                  val.imdbID +
                  "</div> <div class='float-right like-img' > <img src='like.png' id=" +
                  val.imdbID +
                  " /> </div> <div class='float-right heart-img' style='left:17px;'> <img src='heart.png' id=" +
                  val.imdbID +
                  "s" +
                  " /> </div></div> </li>"
              );
            }
            $(".favorites-result #" + val.imdbID + "s").click(function () {
              $(this).hide();
              $(".favorites-result #" + val.imdbID + "l").remove();
              $(".search-result #" + val.imdbID + "s").hide();
            });
          });
          $(".search-result #" + val.imdbID + "s").click(function () {
            $(this).hide();
            $(".favorites-result #" + val.imdbID + "l").remove();
          });
        });
      });
    }
  });
});
