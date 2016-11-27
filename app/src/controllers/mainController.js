
(function (window, angular, undefined) {
    "use strict";
    var mainController = angular.module('main.controllers', []);

    mainController.controller('mainController', ['$scope','$window',function ($scope,$window) {
        console.log("in Main Controller");
        $scope.interests= [
        	{
        		name: 'Painting',
        		icon: 'https://material.angularjs.org/latest/img/icons/angular-logo.svg'
        	},
        	{
        		name: 'Photoshop',
        		icon: 'https://material.angularjs.org/latest/img/icons/angular-logo.svg'
        	},
        	{
        		name: 'Illustrator',
        		icon: 'https://material.angularjs.org/latest/img/icons/angular-logo.svg'
        	},
        ];
    }]);
})(window, window.angular);