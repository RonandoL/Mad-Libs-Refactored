$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var blanks = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];

    blanks.forEach(function(blank) {
      var userInput = $('input#' + blank).val();
      $('.' + blank).text(userInput);
    });

    $('#story').show();
  });

});



// Below is refactored:
// $(document).ready(function() {
//   $('form').submit(function(event) {
//     event.preventDefault();
//
//     var person1 = $('#person1').val();
//     var person2 = $('#person2').val();
//     var animal = $('#animal').val();
//     var exclamation = $('#exclamation').val();
//     var verb = $('#verb').val();
//     var noun = $('#noun').val();
//
//     $('.person1').text(person1);
//     $('.person2').text(person2);
//     $('.animal').text(animal);
//     $('.exclamation').text(exclamation);
//     $('.verb').text(verb);
//     $('.noun').text(noun);
//
//     $('#story').show();
//   });
//
// });
