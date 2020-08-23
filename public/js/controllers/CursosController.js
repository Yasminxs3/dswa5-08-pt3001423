angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
            {_id: 1, nome: 'Analise e desenvolvimento de sistemas', coordenador: 'João Silva'},
            {_id: 2, nome: 'Arquitetura', coordenador: 'Maria'},
        ];

        $scope.filtro = '';
});