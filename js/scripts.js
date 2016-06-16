$(document).ready(function() {
  $("form").submit(function(event) {
    var blanks = [$("#mammal").val(), $("#reptile").val(), $("#amphibian").val()];
    var clone = blanks.slice();
    clone = clone.reverse();

    console.log(clone);
    event.preventDefault();
  });

});
