function Place(location, landMark, year, notes) {
  this.location = location;
  this.landMarks = landMark;
  this.year = year;
  this.notes = notes;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedlocation = $("#new-location").val();
    var inputtedlandMarks = $("#new-landmarks").val();
    var inputtedyear = $("#new-year").val();
    var inputtednotes = $("#new-notes").val();

    var newPlace = new Place(inputtedlocation, inputtedlandMarks, inputtedyear, inputtednotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {

      $("#show-places h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".land-marks").text(newPlace.landMarks);
      $(".year").text(newPlace.year);
      $(".notes").text(newPlace.notes);
      $("#show-places").show();

    });

    $("#new-location").val("");
    $("#new-landmarks").val("");
    $("#new-year").val("");
    $("#new-notes").val("");
  })
})
