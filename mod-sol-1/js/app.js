(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.howMuch = 0;
    
    $scope.lunchItems = function() {
      var r = $scope.lunch.split(",").length;
      console.log( ("lunch split length is:" +  r) );
      $scope.howMuch = r;
    };

  }


}) ();
