studioApp.controller('ShowCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $scope.studio = {
    id: $routeParams.id
  }

}])