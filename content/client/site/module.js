(function (){
    'use strict';

    angular.module('client.site', ['ui.router'])

    angular.module('client.site').config(RouteConfig)

    function RouteConfig ($stateProvider) {
        $stateProvider
            .state('site.home', {
            url: '/home',
                views: {
                    "content": {
                        templateUrl:"client/site/home/home.html"
                    }
                }
            })
            .state('site.wall', {
                url: '/wall',
                views: {
                    "content": {
                        templateUrl: "client/site/wall/wall.html",
                        controller: "wallController as wallCtrl"
                    }
                }
            })
    }
})();