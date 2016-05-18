var testchart = function(wins, losses) {
	setTimeout(function() {
		var win = wins,
		lost = losses,
		canvas = document.getElementById('myChart'),

		data = {
			labels: ["won", "lost"],
			datasets: [
			{
				label: "",
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
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