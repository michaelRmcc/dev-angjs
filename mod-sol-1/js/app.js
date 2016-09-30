(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.howMuch = 0;
    $scope.feedbackMsg = "";
    $scope.msgAttribs = {
      "background-color": "pink",
      "color" : "blue",
      "border-color" : "brown brown",
      "border-style" : "dotted"
    };

    $scope.lunchItems = function() {
      var r = $scope.lunch.split(",").length;
      //console.log( ("lunch split length is:" +  r) );
      $scope.howMuch = r;
    };

    $scope.isTooManyLunchItems = function() {
        $scope.lunchItems();
        $scope.currentMsgSettings();
        //return ( $scope.lunchItems() > lunchItemsLimit );
    }

    //called when submit button clicked
    $scope.currentMsgSettings = function() {
        var currentLunchItemsLimit = 3;

        if (0 == $scope.howMuch) {
            $scope.feedbackMsg = "Please enter data first";
        } else if ($scope.howMuch <= currentLunchItemsLimit) {
            $scope.feedbackMsg = "Enjoy!";
        } else if ($scope.howMuch > currentLunchItemsLimit) {
            $scope.feedbackMsg = "Too much!";
        }
        $scope.styleAttribs();

    }

    //console.log($scope.howMuch);
    $scope.styleAttribs = function() {
      var lunchItemsLimit = 3;

      if ($scope.howMuch === 0) {
          //red
          $scope.msgAttribs = {
            "background-color": "yellow",
            "color" : "#ff0000",
            "border-color" : "#ff0000 #ff0000",
            "border-style" : "solid"
          }
       } else if ($scope.howMuch <= lunchItemsLimit) {
           //green
           $scope.msgAttribs = {
             "background-color": "purple",
             "color" : "#008000",
             "border-color" : "#008000 #008000",
             "border-style" : "solid"
          }
       } else if ($scope.howMuch > lunchItemsLimit) {
         //green
         $scope.msgAttribs = {
           "background-color": "brown",
           "color" : "#008000",
           "border-color" : "#008000 #008000",
           "border-style" : "solid"
          }
       }

     }  // sytleattribs function



  }


}) ();
