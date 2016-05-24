var drawPieChart = function(games) {
  setTimeout(function() {
    var gamesData = games;
    var ctx = document.getElementById("myChart3").getContext("2d");

    //todo data (wins/loss alltime?)

    var data = {
      labels: [
      "Losses",
      "Wins"
      ],
      datasets: [{
        data: [gamesData.stats.totalSessionsLost, gamesData.stats.totalSessionsWon],
        backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
        ],
        hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
        ]
      }]
    };

    var option = { 
      scaleShowVerticalLines: false,
      responsive: false,
      maintainAspectRatio: false
    }

    var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: data
    });
  }, 200);
}
