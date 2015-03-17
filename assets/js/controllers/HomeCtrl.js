studioApp.controller('HomeCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {

  angular.extend($scope, {
    defaults: {
      scrollWheelZoom: false
    },
    center: {
        lat: 47.623354,
        lng: -122.330112,
        zoom: 12
    }
  })
}])