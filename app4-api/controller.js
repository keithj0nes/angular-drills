angular.module("apiApp").controller("mainCtrl", function($scope, mainSvc){

  mainSvc.getShipInfo().then(function(starShips){
    // if(mainSvc.getShipInfo(reponse.data.results.cost_in_credits) === "unknown"){
    //   return ""
    // }
    $scope.starShips = starShips;
  })

})
