var drawBarChart = function(champs) {
	// short delay to ensure canvas has been genereated in the dom.
	setTimeout(function() {
		// todo:  clear before redrawing.

		var canvas = document.getElementById('myChart'),
				topChamps = champs,
				losses = [],
		  	wins = [],
				names = [];

		for (var i = 0; i < topChamps.length; i++) {
			names.push(topChamps[i].name);
			losses.push(topChamps[i].lost);
			wins.push(topChamps[i].won);
		}


		var data = {
			labels: names,
			datasets: [{
				label: "wins",
				backgroundColor: "rgba(7, 210, 0, 0.2)", // GREEN
				borderColor: "rgba(7, 210, 0, 0.8)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(7, 210, 0, 0.4)", 
				hoverBorderColor: "rgba(7, 210, 0, 1)",
				data: wins,
			},
			{
				label: "losses",
				backgroundColor: "rgba(238, 11, 11, 0.2)", // RED
				borderColor: "rgba(238, 11, 11, 0.8)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(238, 11, 11, 0.4)",
				hoverBorderColor: "rgba(238, 11, 11, 1)",
				data: losses,
			}],

		};

		var option = { 
			scaleShowVerticalLines: false,
			responsive: false,
			maintainAspectRatio: false,
			
			animation: {
				duration: 5000
			},
			legend: {
				display: false,
			},
			
			scales: {
				xAxes: [{
					gridLines: {
						display: false
					}
				}],
				yAxes: [{
					gridLines: {
						display: false
					},	
					ticks: {
						beginAtZero: true
					}
				}]
			}
		};

		var myBarChart = Chart.Bar(canvas,{
			data:data,
			options:option
		});

	}, 200);

	console.log('bar chart drawn!');
}