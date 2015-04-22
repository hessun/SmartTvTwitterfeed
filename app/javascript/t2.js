// API DOCUMENTATION: https://dev.twitter.com/docs/api/1.1

var result = $('#result');

$('#searchForm').submit(function () {
	searchTweets($('#searchInput').val());
	return false;
});

function showTweets(data) {
			console.log(data);
			result.empty();

			data.statuses.forEach(function (status) {
				
				var tweetUser = $('<h3>').appendTo(result);
				var tweetTime = $('<p>').appendTo(result);
				var tweetText = $('<p>').appendTo(result);
				tweetUser.append(status.user.name);
				tweetTime.append(status.created_at);
				tweetText.append( status.text);
				$( "<hr>" ).appendTo( result );
				
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


//Tässä intervalli funktio haulle 5 sek välein
//window.setInterval(function(){
//	searchTweets($('#searchInput').val());
//}, 5000); 

//users.metropolia.fi/~ollial/verkkopalvelut/k2015/twitter/twitter.js Esimerkki pöllitty