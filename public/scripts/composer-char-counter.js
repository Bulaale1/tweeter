//char counter function 
$(document).ready(function() {
  $('.new-tweet form textarea').on('input', function() {
    let maxLength = 140;
    let currentLength = $(this).val().length;
    let remaining = maxLength - currentLength;
    let counterElement = $('.counter');
    counterElement.text(remaining);
    if (remaining < 0) {
     
      counterElement.css('color', 'red'); //Set the color of the counter to red if it exceeds the limit
    } else {
      counterElement.css('color', ''); // Reset color to default
    }

  });
});