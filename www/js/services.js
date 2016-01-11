(function () {
  'use strict';

  var forecastioWeather = ['$q', '$resource', '$http', 'c3265d05634064177a429fd4add54d07',
    function($q, $resource, $http, c3265d05634064177a429fd4add54d07) {
    var url = 'https://api.forecast.io/forecast/' + c3265d05634064177a429fd4add54d07 + '/';

    var weatherResource = $resource(url, {
      callback: 'JSON_CALLBACK',
    }, {
      get: {
        method: 'JSONP'
      }
    });

    return {
      //getAtLocation: function(lat, lng) {
      getCurrentWeather: function(lat, lng) {
        return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK&units=si');
      }
    };
  }];

  angular.module('starter.services', ['ngResource'])

  .factory('DataStore', function() {
      //create datastore with default values
      var DataStore = {
          city:       'Portumna',
          latitude:   53.0905,
          longitude:  -8.2337 };

      DataStore.setCity = function (value) {
         DataStore.city = value;
      };

      DataStore.setLatitude = function (value) {
         DataStore.longitude = value;
      };

      DataStore.setLongitude = function (value) {
         DataStore.longitude = value;
      };

      return DataStore;
  })
  .factory('Weather', forecastioWeather);
}());
