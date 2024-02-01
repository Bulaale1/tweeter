
$(document).ready(() => {
 
  const createTweetElement = function(tweetData) {
  
    const $tweetElements = `
          <header>
            <h2>Name: ${tweetData.user.name} </h2>
            <h2>avatar: ${tweetData.user.avatars} </h2>
            <h2>username: ${tweetData.user.handle} </h2>
          </header>
          <h2>content: ${tweetData.content.text}</h2>
          <h3>time : ${tweetData.created_at}</h3>
      `;
    return $tweetElements;
  };
  //declare tweetContainer 
  const $tweetContainer = $('#tweets-container');

  //timeago
  let timeElement = Date.now();
  let time = timeago.format(timeElement);
  let $tim = $('#timeago').text(time);
// loops through param(tweets)
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container

  const renderTweets = function ($tweets) {
    for (const $tweet of $tweets) {

      const $eachTweet = createTweetElement($tweet);

      $tweetContainer.prepend($eachTweet );
    }
  };

 const $formId = $('#form');
//  const $newFoodItemForm = $('#new-food-item');
  $formId.on('submit', (event) => {
    // prevent the default behaviour of the browser
    event.preventDefault();
    
    // grab the data from the form
    const data = $formId.serialize();

    // // POST the data to the server
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: () => {
        console.log('post request resolved successfully');
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
