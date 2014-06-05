angular.module('{%= name %}')
  .service('commonModels', function commonModels() {
    "use strict";

    var Models = {
      warehouse_id: null,
      scanned_barcodes: [],
      parent_menu_id: 2
    };
    return Models;
  });
