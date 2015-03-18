studioApp.controller('HomeCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {

  // angular.extend($scope, {
  //   defaults: {
  //     scrollWheelZoom: false
  //   },
  //   center: {
  //       lat: 47.623354,
  //       lng: -122.330112,
  //       zoom: 12
  //   }
  // })


  function _init(){
    $scope.center = {
      lat: 47.623354,
      lng: -122.330112,
      zoom: 12
    };
    //randomly place markers on the map
    var westLng = 34.770956;
    var eastLng = 34.832754;
    var northLat = 32.098787;
    var southLat = 32.05261;
    var numberOfMarkers = 100;
    $scope.markers = {};
    for(var i = 0; i<numberOfMarkers; i++){
      var randomLng = (Math.random() * (eastLng - westLng) + westLng).toFixed(6);
      var randomLat = (Math.random() * (northLat - southLat) + southLat).toFixed(6);
      $scope.markers['marker_' + i] = {
        lat: parseFloat(randomLat),
        lng: parseFloat(randomLng),
      };
    }
  }

   _init();

}])