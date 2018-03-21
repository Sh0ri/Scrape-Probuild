let cheerio = require('cheerio');
let request = require('request');

//var total_build = {time : "", player : "", opponent : "", kda : {kill : "", death : "", assists : ""} , gold : "", keystone : "", items : { slot1 : "", slot2 : "", slot3 : "", slot4 : "", slot5 : "", slot6 : "", slot6 : "", slot7 : ""}, summoners : { summ1 : "", summ2 : ""}};
get_builds_for_one_champion("Ornn");

function get_builds_for_one_champion(champion_name)
{
	return new Promise((resolve, reject) => {
		var url = 'http://www.probuilds.net/champions/details/Ornn';
		var builds = [];

		var headers = { 
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
			'Content-Type' : 'application/x-www-form-urlencoded' 
		};

		request({url:url,json:true,headers:headers}, function(error, response, html){
			var $ = cheerio.load(html);
			console.log("avant le foreach");
			var row = $('.module').children('.wrap').children('.pro-player-feed-5').children('#game-feed');
			//console.log(test);
			var total_build = {time : "", player : "", opponent : "", kda : {kill : "", death : "", assists : ""} , gold : "", keystone : "", items : { slot1 : "", slot2 : "", slot3 : "", slot4 : "", slot5 : "", slot6 : "", slot6 : "", slot7 : ""}, summoners : { summ1 : "", summ2 : ""}};

			var time = row.children('.time').text();
			var player = row.children('.player.gold').children('.gold').text();

			var opponent_src = row.children('.opponent').children().data('src');
			//var opponent = opponoent_src.split("/").last();

			console.log(time);
			console.log(player);
			console.log(opponent_src);
			/*
			$('#game-feed').each(function(row){
				console.log("dans le foreach");
				console.log(row);
				var total_build = {time : "", player : "", opponent : "", kda : {kill : "", death : "", assists : ""} , gold : "", keystone : "", items : { slot1 : "", slot2 : "", slot3 : "", slot4 : "", slot5 : "", slot6 : "", slot6 : "", slot7 : ""}, summoners : { summ1 : "", summ2 : ""}};

				var time = row.children('.time').text();
				var player = row.children('.player.gold').children('.gold').text();

				var opponent_src = row.children('.opponent').children().data('src');
				var opponent = opponoent_src.split("/").last();
				
				console.log(total_build);
				builds.push(total_build);

			})
			*/

			resolve(builds);
		})
	});
}