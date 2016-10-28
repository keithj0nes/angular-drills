angular.module("apiApp").controller("mainCtrl", function($scope, mainSvc){

  mainSvc.getShipInfo().then(function(starShips){
    $scope.starShips = starShips;
  })

})
