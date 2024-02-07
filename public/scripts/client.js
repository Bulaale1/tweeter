
$(document).ready(() => {
  const createTweetElement = function(tweetData) {
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
  
 //Create tweet Elements dynamically
    const $tweetElements = `
          <div class="eachcontainer">
          <header class="userInfo">
          <div >
          <img src="${tweetData.user.avatars}" alt="User Avatar">
          <h2>${tweetData.user.name} </h2>
          </div>
          <h2> ${tweetData.user.handle} </h2>
          </header>
          <h2>${escape(tweetData.content.text)}</h2>
          <footer class="footer">
          <h3>${timeago.format(tweetData.created_at)}</h3>
          <div class="icons">
          <i class="fa-regular fa-flag"></i> <!-- Flag icon from Font Awesome -->
          <i class="fas fa-heart"></i> <!-- Heart icon from Font Awesome -->
          <i class="fa-solid fa-retweet"></i> <!-- Share icon from Font Awesome -->
        </div>
        </footer>
          </div>

      `;
    return $tweetElements;
  };
  //declare tweetContainer 
  const $tweetContainer = $('#tweets-container');

// loops through param(tweets)
// calls createTweetElement for each tweet
// take the return value and append it to the tweets container

  const renderTweets = function ($tweets) {
    
  
    for (const $tweet of $tweets) {

      const $eachTweet = createTweetElement($tweet);

      $tweetContainer.prepend($eachTweet );

    }
  };

const $formId = $('#form');
  $formId.on('submit', (event) => {
    // prevent the default behaviour of the browser
    event.preventDefault();
    //Display an error message  if the tweet is  empty, or exceeds the 140 character limit.
    //Slideup(hide) error message 
    $('#empty-error').slideUp();
    $('#length-error').slideUp();

  let tweetLength = $('#tweet-text').val().length;

  // show an error message if the post exceeds the character limit ;
  if (tweetLength > 140) {
    $('#length-error').slideDown();
    return;
  } else if (tweetLength <= 0) {
    // show an error message if the post is empty;
    $('#empty-error').slideDown();
    return;
  }
    // grab the data from the form
    const data = $formId.serialize();
  
    // // POST the data to the server
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: () => {
        console.log('post request resolved successfully');
        //clear the textarea after  posting successfully

        $('#tweet-text').val('');

       //reset the char counter back to 140 
        $('.counter').val('140');

        loadTweets();
       
      }
    });
  });

  const loadTweets = () => {
    // GET the data from the server
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: ($tweetElements) => {
        renderTweets($tweetElements);
      }
    });
  };

  loadTweets();
 
});
