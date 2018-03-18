let cheerio = require('cheerio');
let request = require('request');

//var total_build = {time : "", player : "", opponent : "", kda : {kill : "", death : "", assists : ""} , gold : "", keystone : "", items : { slot1 : "", slot2 : "", slot3 : "", slot4 : "", slot5 : "", slot6 : "", slot6 : "", slot7 : ""}, summoners : { summ1 : "", summ2 : ""}};

function get_builds_for_one_champion(champion_name)
{
	return new Promise((resolve, reject) => {
		var url = 'http://www.probuilds.net/champions/details/' + champion_name;

		request({url:url,json:true}, function(error, response, html){
			var $ = cheerio.load(html);

			$('.game-feed.pro-history.pos-rel').children('a').each(function(row){

				var total_build = {time : "", player : "", opponent : "", kda : {kill : "", death : "", assists : ""} , gold : "", keystone : "", items : { slot1 : "", slot2 : "", slot3 : "", slot4 : "", slot5 : "", slot6 : "", slot6 : "", slot7 : ""}, summoners : { summ1 : "", summ2 : ""}};

				var time = row.children('.time').text();
				var player = row.children('.player.gold').children('.gold').text();

				var opponent_src = row.children('.opponent').children().["src"];
				var opponent = opponoent_src.split("/").last();
				promos.push(promo);

			})
		})
	});
}