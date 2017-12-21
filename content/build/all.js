'use strict';

(function () {
    'use strict';

    angular.module('client', ['ui.router', 'client.layout', 'client.site', 'client.media', 'client.services']);

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

/* global angular */
(function () {
    'use strict';

    angular.module('client.services', []);
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
        }).state('site.wall', {
            url: '/wall',
            views: {
                "content": {
                    templateUrl: "client/site/wall/wall.html",
                    controller: "wallController as wallCtrl"
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
'use strict';

(function () {
    'use strict';

    angular.module('client.services').factory('messageService', MessageServiceFactory);

    MessageServiceFactory.$inject = ['$http', '$q'];

    function MessageServiceFactory($http, $q) {
        return {
            readAll: _readAll,
            create: _create
        };

        function _readAll() {
            return $http.get('/api/messages').then(xhrSuccess).catch(onError);
        }

        function _create(messageData) {
            return $http.post('/api/messages', messageData).then(xhrSuccess).catch(onError);
        }

        function xhrSuccess(response) {
            return response.data;
        }

        function onError(error) {
            console.log(error.data);
            return $q.reject(error.data);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site').controller('wallController', WallController);

    WallController.$inject = ['messageService', '$log'];

    function WallController(messageService, $log) {
        var vm = this;
        vm.message = "lol";

        init();

        function init() {}
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site').controller('wallController', WallController);

    WallController.$inject = ['messageService', '$log'];

    function WallController(messageService, $log) {

        var vm = this;

        vm.formData = null;
        vm.messageArray = null;

        vm.submit = _submit;

        init();

        function init() {
            vm.formData = {};
            vm.messageArray = [];
            messageService.readAll().then(function (response) {
                $log.log(response);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item.guestBook) {
                            vm.messageArray.push(item);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
        }

        function _submit() {
            if (vm.formData.name && vm.formData.content) {
                vm.formData.guestBook = true;
                vm.messageArray.push(vm.formData);
                messageService.create(vm.formData).then(function (response) {
                    $log.log(response);
                });
            } else {
                $log.log('chill.');
            }
            vm.formData = {};
        }
    }
})();