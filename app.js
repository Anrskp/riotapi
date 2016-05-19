'use strict'

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

	// todo: html5 API history routing

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
		
	// Get summoner info. Initiate
	$scope.getSummonerInfo = function() {	
		// Searchfield input.
		var userInput = document.getElementById("userInput").value,
			url = baseUrl
			 	  + '/api/lol/euw/v1.4/summoner/by-name/'
			 	  + userInput // summoner name
				  + apiKey;

		$http.get(url).then(function (response) {
			$scope.newSummoner = response.data[userInput];
			getChampions();
			console.log($scope.newSummoner);
		});
	};

	// Get ten recent matches stats.
	var getChampions = function() {
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
			// Draw chart.
			testchart(30,80);
			console.log($scope.matchRecords);
		})
	}

	// Get top played champions stats
	var getChampionsStats = function() {

	}

	// CHAMPIONS STATS

	// ELO STATS
	
	// LIVE STATS

});