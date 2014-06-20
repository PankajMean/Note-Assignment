'use strict';

angular.module('mean.assignment').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('assignment example page', {
            url: '/assignment/example',
            templateUrl: 'assignment/views/index.html'
        });
    }
]);
