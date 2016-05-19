var testchart = function(wins, losses) {
	setTimeout(function() {
		var win = wins,
		lost = losses,
		canvas = document.getElementById('myChart'),

		data = {
			labels: ["won", "lost"],
			datasets: [
			{
				label: "amount",
				backgroundColor: "rgba(36, 95, 146, 0.2)",
				borderColor: "rgba(36, 95, 146, 0.8)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(36, 95, 146, 0.4)",
				hoverBorderColor: "rgba(36, 95, 146, 1)",
				data: [wins, lost],
			}]
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