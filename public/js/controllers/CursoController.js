angular.module('ifsp').controller('CursoController',
	function($scope, $routeParams) {
        console.log($routeParams.cursoId);
        $scope.id = $routeParams.cursoId;
	});