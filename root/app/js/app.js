angular.module('{%= name %}', {%= importedModules %});
{%if (importedModules.indexOf('ngRoute') !== -1) {%}
angular.module('{%= name %}').config(function ($routeProvider) {
  "use strict";

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
{%}%}