'use strict';

angular.module('myControllers', [])
  .controller('weatherController', function($scope, WeatherService) {
    $scope.getWeather = function() {
      WeatherService.getForecast($scope.city).then(function(response) {
        var keys =_.keys(response.result.pressure).sort(function(a, b) {
                var aa = new Date(a),
                    bb = new Date(b);

                if (aa !== bb) {
                    if (aa > bb) { return 1; }
                    if (aa < bb) { return -1; }
                }
                return aa - bb;
            });
        $scope.dataPresent = true;
        $scope.forecast = response.result.table;
        $scope.labels1 = keys;
        $scope.data1 = _.values(response.result.pressure);
        $scope.labels2 = _.keys(response.result.temperature);
        $scope.data2 = _.values(response.result.temperature);
        $scope.datasetOverride = [
          {
            label: "Line chart",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            type: 'line'
          }
        ];

      });
    }
  });