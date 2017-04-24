'use strict';

angular.module('myServices', [])
  .factory("WeatherService", function($http) {
    return {
      getForecast: function(city) {
        return $http({
          method: "GET",
          url: "https://162.243.4.120:8000/weather/api/" +city
        }).then(function onFulfilled(response) {
          return { result: response.data };
        }, function onRejected(response) {
          return { errors: response.data };
        });
      }
    };
  });
