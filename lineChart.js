var drawLineChart = function (games) {
	// short delay to ensure canvas has been genereated in the dom.
	setTimeout(function() {
		var recentGames = games,
				lineValues = [],
				canvas = document.getElementById('myChart2').getContext('2d'),
				lineValue = 0;

		console.log('linechart drawn');

		// generate values for line chart.
		for(var i = 0; i < recentGames.length; i++) {
			if(recentGames[i] == "won") {
				lineValue++;
			} else {
				lineValue--;
			}

			lineValues.push(lineValue);
		}

		// setup starting points.
		if(recentGames[0] != "") { 
			recentGames.unshift("");
		}
		lineValues.unshift(0);

		var data = {
			labels : recentGames,
			datasets : [
			{
				backgroundColor: "rgba(0, 0, 0, 0)",
				fillColor : "rgba(255,255,255,0.0)",
				strokeColor : "#ACC26D",
				pointColor : "#fff",
				pointStrokeColor : "#9DB86D",
				data : lineValues
			}
			]
		}

		var option = { 
			scaleShowVerticalLines: false,
			responsive: false,
			maintainAspectRatio: false
		}

		var myNewChart = new Chart(canvas , {
			type: "line",
			data: data, 
			options: option
		});

	}, 200);
}