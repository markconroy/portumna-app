angular.module('starter.controllers', ['ionic'])

.controller('HomeCtrl', function($scope) {})

// .controller('AboutCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})

.constant('c3265d05634064177a429fd4add54d07', 'c3265d05634064177a429fd4add54d07')
.controller('WeatherCtrl', function($scope,$state,Weather,DataStore) {
  //read default settings into scope
  console.log('inside weather');
  $scope.city  = DataStore.city;
  var latitude  = DataStore.latitude;
  var longitude = DataStore.longitude;

  //call getCurrentWeather method in factory ‘Weather’
  Weather.getCurrentWeather(latitude,longitude).then(function(resp) {
    $scope.current = resp.data;
    console.log('GOT CURRENT', $scope.current);
    //debugger;
  }, function(error) {
    alert('Unable to get current conditions');
    console.error(error);
  });
})

.controller('BusCtrl', function($scope, $http) {
  $scope.init = function() {
    $http.get("sample-json/business-directory.json")
      .success(function(data) {
          $scope.nodes = data.nodes;
          $scope.browse = function(v) {
            window.open(v, "_system", "location=yes");
          };
          window.localStorage["nodes"] = JSON.stringify(data.nodes);
      })
      .error(function(data) {
          console.log("ERROR: " + data);
          if(window.localStorage["nodes"] !== undefined) {
            $scope.entries = JSON.parse(window.localStorage["nodes"]);
          }
      });
  };
})

.controller('AboutCtrl', function($scope, $http) {
  $http.get('/sample-json/marknode.json')
    .success(function(data) {
      $scope.about = data.nodes[0];
    })
    .error(function(data) {
      console.log("ERROR: " + data);
    });
});
