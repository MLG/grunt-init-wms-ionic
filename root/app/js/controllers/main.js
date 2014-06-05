angular.module('{%= name %}').controller('mainController', function ($scope, $location, commonModels) {
  "use strict";

  $scope.data = {};
  $scope.commonModels = commonModels;
    if (($location.search()).warehouse) {
      commonModels.warehouse_id = ($location.search()).warehouse;
    }
    if (($location.search()).parent) {
      commonModels.parent_menu_id = ($location.search()).parent;
    }
    if (!commonModels.warehouse_id) {
      return window.location.assign('/b/index.html#/warehouse');
    }
});