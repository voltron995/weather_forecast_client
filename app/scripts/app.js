'use strict';

var myApp = angular.module('myApp', ['ui.router', 'myControllers', 'myServices', 'chart.js'])
  .config(function($stateProvider, $urlRouterProvider, ChartJsProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'partials/mainForm.html'
      });

    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });

    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  });