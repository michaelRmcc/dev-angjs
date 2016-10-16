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
      //javascript docs say empty string has a value of 1,
      //& stackoverflow suggested filter function -- good since ECMAScript 5.
      //so if ar is an empty array, which is returned if no entries yet, then
      //the length returned to ar.length call, will be 0, which is good.
      var ar = $scope.lunch.split(",").filter(function(el) {return el.length != 0});
      $scope.howMany = ar.length;
    };

    $scope.isTooManyLunchItems = function() {

        $scope.lunchItems();
        console.log("howMany is: " + $scope.howMany);
        $scope.currentMsgSettings();
    }

    //called when submit button clicked
    $scope.currentMsgSettings = function() {
        var currentLunchItemsLimit = 3;

        if (!$scope.howMany) {
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
