/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

$(document).ready(function() {
  //character counting function
  $('.new-tweet form textarea').on('input', function() {
    //the maximum character allowed for the user
    let maxLength = 140;
    let currentLength = $(this).val().length;
    let remaining = maxLength - currentLength;
    let counterElement = $('.counter');
    //set the character count to how many characters are remaining
    counterElement.text(remaining);
    if (remaining < 0) {
      
      counterElement.css('color', 'red');//if the remaining characters are less than 0, turn to red
    } else {
      counterElement.css('color', ''); // Reset color to default
    }

  });
});