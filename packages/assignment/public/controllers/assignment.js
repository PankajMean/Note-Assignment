'use strict';

angular.module('mean.assignment').controller('AssignmentController', ['$scope', 'Global', 'Assignment',
    function($scope, Global, Assignment) {
        $scope.global = Global;

        $scope.showUpdtae = 'false';

        $scope.assignment = [{}];

        //$scope.find = function() {
        Assignment.query(function(assignment) {
            $scope.assignment = assignment;
        });
        // };

        $scope.create = function() {

            var exp=this.note;
            var result;

            try {
                result = exp + '=' + eval(exp);
            }
            catch(exception) {

                result = exp;
            }

            var assignment = new Assignment({
                note: result
            });


            assignment.$save(function(response) {
                $scope.assignment.push(response);
                //$location.path('articles/' +response._id);
            });
            this.note = '';
        };


        $scope.updateData = function(assignment) {

            $scope.showUpdate = 'true';

            $scope.note = assignment.note;
            $scope.id=assignment._id;

            $scope.editAssignment = assignment;

        };

        $scope.update = function(assignment) {


            //alert("Pankaj Note"+this.note);

            var exp=this.note;
            var result;

            try {
                result = exp + '=' + eval(exp);
            }
            catch(exception) {

                result = exp;
            }


            assignment.note = result;

            assignment.$update(function(response) {

                //alert("Pankaj Updated");
                //$scope.assignment.push(response);
                //$location.path('articles/' +response._id);
            });
            this.note = '';
            $scope.showUpdate = 'false';
            /*assignment.$update(function() {
                // $location.path('articles/' + article._id);
            });*/

            /*var assignment = $scope.assignment;
            if (!assignment.updated) {
                assignment.updated = [];
            }
            assignment.updated.push(new Date().getTime());*/


        };

        $scope.remove = function(assignment) {

            //alert("Delete1"+assignment);

            if (assignment) {
                assignment.$remove();
                //alert("Delete2");

                for (var i in $scope.assignment) {
                    if ($scope.assignment[i] === assignment) {
                        $scope.assignment.splice(i, 1);
                    }
                }
            } else {
                //alert("Delete3");
                $scope.assignment.$remove(function(response) {
                    //$location.path('assignment');
                });
            }
        };



        $scope.package = {
            name: 'assignment'
        };




    }
]);
