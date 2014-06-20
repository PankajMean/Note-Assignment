'use strict';

/*angular.module('mean.assignment').factory('Assignment', [
    function() {
        return {
            name: 'assignment'
        };
    }
]);*/

angular.module('mean.assignment').factory('Assignment', ['$resource',
    function($resource) {
        return $resource('assignment/:assignmentId', {
            assignmentId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
