
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



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

// loops through param(tweets)
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container

  const renderTweets = function ($tweets) {
    for (const $tweet of $tweets) {

      const $eachTweet = createTweetElement($tweet);

      $tweetContainer.prepend($eachTweet );
    }
  };
});
