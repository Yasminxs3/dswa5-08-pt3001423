angular.module('ifsp').controller('ContatosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.contatos  = [
            {_id: 1, nome: 'Yasmin', email: 'teste@teste.com'},
            {_id: 2, nome: 'user 2', email: 'user2@gmail.com'},
        ];

        $scope.filtro = '';
});