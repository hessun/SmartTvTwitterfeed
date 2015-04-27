// API DOCUMENTATION: https://dev.twitter.com/docs/api/1.1
$(document).ready(function() {
     $("#searchForm").submit(function(e){
         e.preventDefault();
     });
});

var result = $('#result');

$('#searchForm').submit(function () {
	searchTweets($('#searchInput').val());
	return false;
});

function showTweets(data) {
			console.log(data);
			result.empty();
			data.statuses.forEach(function (status) {
				
				
				var tweetContainer = $('<div id="tweet-container">').appendTo(result);
				var tweetProfileImg = $('<div id="tweet-profile-img">').appendTo(tweetContainer);
				var tweetInfo = $('<div id="tweet-info">').appendTo(tweetContainer);
				var tweetContent = $('<div id="tweet-content">').appendTo(tweetContainer);
				// Lets create variables for fetched information and define where to append it
				//var tweetUserProfileImageUrl = ;
				var tweetUserProfileImageUrl = status.user.profile_image_url_https;
				var tweetUserProfileImage = $('<img id="twitter-user-img" src=' + tweetUserProfileImageUrl + '>').appendTo(tweetProfileImg);
				
				var tweetUser = $('<h3 id="tweet-user">').appendTo(tweetInfo);
				var tweetTime = $('<p id="tweet-time">').appendTo(tweetInfo);
				var tweetText = $('<p id="tweet-text">').appendTo(tweetContent);
				tweetUser.append(status.user.name);
				tweetTime.append(status.created_at);
				tweetText.append(status.text);
				$( "<hr>" ).appendTo( result );

				//console.log(tweetUserProfileImageUrl);
			});
		}

function searchTweets(query) {
	/*
		We are calling the PHP script here, which handles the authentication and
		passing the request to the Twitter API.

		search/tweets documentation: https://dev.twitter.com/docs/api/1.1/get/search/tweets
	*/
	console.log("search: "+query);
	$.ajax({
		url: 'http://users.metropolia.fi/~arttusp/io2015/twitter/twitter.php',
		dataType: 'json',
		data: {
			method: 'search/tweets',
			q: query
		},
		success: showTweets
	});
	
	
}


// Tässä intervalli funktio haulle 5 sek välein
window.setInterval(function(){
searchTweets($('#searchInput').val());
}, 5000); 