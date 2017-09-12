'use strict';

// angular.module('mean.system').controller('HeaderController', ['$scope', '$rootScope', 'Menus', 'MeanUser', '$state',
//   function ($scope, $rootScope, Menus, MeanUser, $state) {
//     var vm = this;

//     vm.menus = {};
//     vm.hdrvars = {
//       authenticated: MeanUser.loggedin,
//       user: MeanUser.user,
//       isAdmin: MeanUser.isAdmin
//     };
angular.module('mean.system').controller('sideCtr', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
