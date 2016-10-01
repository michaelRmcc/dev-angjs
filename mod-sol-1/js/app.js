(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.howMany = 0;
    $scope.feedbackMsg = "";


    $scope.lunchItems = function() {
      var r = ($scope.lunch.split(",").length);

      if (r === "") {
         $scope.howMany = 0;
         //console.log( ("checked is:" +  $scope.howMany) );
      } else {
        $scope.howMany = r;
      }

    };

    $scope.isTooManyLunchItems = function() {

        $scope.lunchItems();
        console.log("howMany is: " + $scope.howMany);
        $scope.currentMsgSettings();
    }

    //called when submit button clicked
    $scope.currentMsgSettings = function() {
        var currentLunchItemsLimit = 3;

        if (0 == $scope.howMany) {
            $scope.feedbackMsg = "Please enter data first";
        } else if ($scope.howMany <= currentLunchItemsLimit) {
            $scope.feedbackMsg = "Enjoy!";
        } else if ($scope.howMany > currentLunchItemsLimit) {
            $scope.feedbackMsg = "Too much!";
        }
      //  $scope.styleAttribs();
    }

    $scope.styleAttribs = function() {
      var lunchItemsLimit = 3;

      if ($scope.howMany === 0) {
          return "needEntries";
      } else if ($scope.howMany <= lunchItemsLimit) {
          return "enoughEntries";
      } else if ($scope.howMany > lunchItemsLimit) {
         return "tooManyEntries";
       }

     }  // sytleattribs function

  }


}) ();
