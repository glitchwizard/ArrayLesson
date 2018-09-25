$(document).ready(function () {
  var ArrayOutput = [];
  $("form").submit(function (event) {
  var foodinput = $("#fav1").val();
  var carinput = $("#fav2").val();
  var placeinput = $("#fav3").val();
  event.preventDefault();
  function getfavs() {
    ArrayOutput.push(foodinput);
    ArrayOutput.push(carinput);
    ArrayOutput.push(placeinput);
    };
    getfavs();
    $("span#fav1answer").text(ArrayOutput[0]);
    $("span#fav2answer").text(ArrayOutput[1]);
    $("span#fav3answer").text(ArrayOutput[2]);
  });
});
