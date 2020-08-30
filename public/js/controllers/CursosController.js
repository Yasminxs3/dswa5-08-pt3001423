angular.module('ifsp').controller('CursosController',
	function($resource, $scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
            {_id: 1, nome: 'Analise e desenvolvimento de sistemas', coordenador: 'João Silva'},
            {_id: 2, nome: 'Arquitetura', coordenador: 'Maria'},
        ];

		$scope.filtro = '';
		
		var Curso = $resource('/cursos');
		function buscaCursos() {
			Curso.query(
				function(cursos) {
					$scope.cursos = cursos;
				},
				function(erro) {
					console.log('Não foi possível obter a lista de cursos');
					console.log(erro);
				}
			)
		}
		buscaCursos();
});
