var testchart = function(champs) {
	setTimeout(function() {

				var canvas = document.getElementById('myChart'),
				topChamps = champs;


		// todo store labels and data outside to make testchart resuable for other charts,
		// needs labels, 'info label', data, color.
		// clear before redrawing.

		data = {
			labels: [(topChamps[0].name), topChamps[1].name, topChamps[2].name,
					  topChamps[3].name, topChamps[4].name, topChamps[5].name,
					  topChamps[6].name, topChamps[7].name, topChamps[8].name, topChamps[9].name],
			datasets: [
			{
				label: "wins",
				backgroundColor: "rgba(7, 210, 0, 0.2)", // GREEN
				borderColor: "rgba(7, 210, 0, 0.8)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(7, 210, 0, 0.4)", 
				hoverBorderColor: "rgba(7, 210, 0, 1)",
				data: [topChamps[0].won, topChamps[1].won, topChamps[2].won,
					   topChamps[3].won, topChamps[4].won, topChamps[5].won,
					   topChamps[6].won, topChamps[7].won, topChamps[8].won, topChamps[9].won],
			},
			{
				label: "losses",
				backgroundColor: "rgba(238, 11, 11, 0.2)", // RED
				borderColor: "rgba(238, 11, 11, 0.8)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(238, 11, 11, 0.4)",
				hoverBorderColor: "rgba(238, 11, 11, 1)",
				data: [topChamps[0].lost, topChamps[1].lost, topChamps[2].lost, topChamps[3].lost, topChamps[4].lost, topChamps[5].lost,
					   topChamps[6].lost, topChamps[7].lost, topChamps[8].lost, topChamps[9].lost],
			}],

		},

		option = { 
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
		},

		myBarChart = Chart.Bar(canvas,{
			data:data,
			options:option
		});

	}, 100);

	console.log('chart drawn!');
}