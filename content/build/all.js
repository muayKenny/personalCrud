'use strict';

(function () {
    'use strict';

    angular.module('client', ['ui.router', 'client.layout', 'client.site', 'client.media']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.layout', ['ui.router']);

    angular.module('client.layout').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
            abstract: true,
            views: {
                root: {
                    templateUrl: "client/layout/layout.tpl.html"
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.media', ['ui.router']);

    angular.module('client.media').config(RouteConfig);

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.media', {
            url: '/media',
            views: {
                'content@site': {
                    templateUrl: "client/media/visual/h1.html"
                }
            }
        }).state('site.media.audiovisual', {
            url: '/av',
            views: {
                'content@site': {
                    templateUrl: "client/media/audiovisual/audiovisual.html"
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site', ['ui.router']);

    angular.module('client.site').config(RouteConfig);

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.home', {
            url: '/home',
            views: {
                "content": {
                    templateUrl: "client/site/home/home.html"
                }
            }
        });
    }
})();
/* global $ angular */
'use strict';

/* $(function() {
    // moment.js default language
    // moment.locale('en')

    angular.bootstrap(document, ['client'], { strictDi: true })
}); */