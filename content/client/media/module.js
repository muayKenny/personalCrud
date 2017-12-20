(function () {
    'use strict';

    angular.module('client.media', ['ui.router'])

    angular.module('client.media').config(RouteConfig)

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.media', {
                url: '/media',
                views: {
                    'content@site': {
                        templateUrl: "client/media/visual/h1.html"
                    }
                }
            })
            .state('site.media.audiovisual', {
                url: '/av',
                views: {
                    'content@site': {
                        templateUrl: "client/media/audiovisual/audiovisual.html"
                    }
                }
            })
    }
})();