'use strict'

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

	// Routing
	$routeProvider.
	when('/', {
		templateUrl: 'views/landingPage.html',
		controller: 'mainController'
	}).
	when('/championStats', {
		templateUrl: 'views/championStats.html',
		controller: 'mainController'
	}).
	when('/eloStats', {
		templateUrl: 'views/eloStats.html',
		controller: 'mainController'
	}).
	when('/liveGame', {
		templateUrl: 'views/liveGame.html',
		controller: 'mainController'
	}).
	otherwise({
		redirectTo: '/'
	});
});

app.controller('mainController', function($scope, $http) {

	// Fields
	var baseUrl = 'https://euw.api.pvp.net',
		apiKey = '?api_key=10505c29-a6ad-4506-9a94-59e6b010f5d8';
		
		$http.get("lolchamps.json").then(function(response) {
			$scope.allchamps = response.data;
		})

	// Initiate - Get summoner info. 
	$scope.getSummonerInfo = function() {	
		// Searchfield input.
		var userInput = document.getElementById("userInput").value,
			url = baseUrl
			 	  + '/api/lol/euw/v1.4/summoner/by-name/'
			 	  + userInput // summoner name
				  + apiKey;

		$http.get(url).then(function (response) {
			$scope.newSummoner = response.data[userInput];
			getRecentMatches();
			getChampionsStats();
			console.log($scope.newSummoner);
		});
	};

	// Get ten recent matches stats.
	var getRecentMatches = function() {
		var url = baseUrl 
				  + "/api/lol/euw/v1.3/game/by-summoner/"
				  + $scope.newSummoner.id
				  + "/recent" 
				  + apiKey;

		$http.get(url).then(function(response) {
			// todo: format data + error catch
			var matchData = response.data.games;
			location.href = '#/championStats'

			$scope.matchRecords = [];
			
			for (var i = 0; i < matchData.length; i++) {	
				if(matchData[i].stats.win === true) {
					$scope.matchRecords.push('won')
				} else {
					$scope.matchRecords.push('lost')
				}
			} 
		})
	}

	// Get top played champions stats
	var getChampionsStats = function() {
		var url = baseUrl
				  + "/api/lol/euw/v1.3/stats/by-summoner/"
				  + $scope.newSummoner.id
				  + "/ranked"
				  + apiKey;

	    $http.get(url).then(function(response) {
	    	var championsData = response.data.champions;
	    	var championsAmount = championsData.length;
	    	championsData.sort(function(a,b) { 
	    		return b.stats.totalSessionsPlayed - a.stats.totalSessionsPlayed
	    	});

	    	$scope.allGames = championsData[0];
	    	console.log(championsData);
	    	getChampionById(championsData.slice(1,11));
	    })
	}

	// set chart for top played champs
	var getChampionById = function(champions) {
		$scope.mostPlayedChamps = [];
		var championPool = champions;
		

		for (var i = 0; i < championPool.length; i++) {
		var champInfo = {};

			// Get champions name by id from local json.
			for (var j = 0; j < $scope.allchamps.length; j++) {
				if ($scope.allchamps[j].id === championPool[i].id) {	
					champInfo.name = $scope.allchamps[j].name;
				}
			}
		
		champInfo.won = championPool[i].stats.totalSessionsWon;
		champInfo.lost = championPool[i].stats.totalSessionsLost;
		
		$scope.mostPlayedChamps.push(champInfo)
	}
	//draw chart
 	testchart($scope.mostPlayedChamps);
	console.log($scope.mostPlayedChamps);
}

});