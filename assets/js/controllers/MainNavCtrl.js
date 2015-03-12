studioApp.controller('MainNavCtrl',['$scope','$location','$modal', function($scope, $location, $modal){

  $scope.showContact = function(){
    // alert('Here comes the modal');
    $modal.open({
      templateUrl:'/views/contactModal.html',
      controller:'ContactModalCtrl'
    })
  };

}]);