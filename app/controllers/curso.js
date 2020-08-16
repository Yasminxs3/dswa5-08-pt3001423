var cursos = [
    {_id: 1, nome: 'Analise e desenvolvimento de sistemas', coordenador: 'João Silva'},
    {_id: 2, nome: 'Arquitetura', coordenador: 'Maria'},
];

module.exports = function() {
    var controller = {};
    controller.listaCursos = function(req, res) {
        res.json(cursos);
    };
    controller.obtemCurso = function(req, res) {
        var idCurso = req.params.id;
        var curso = cursos.filter(function(curso){
            return curso._id == idCurso;
        })[0];
        curso? res.json(curso) : res.status(404).send('curso não encontrado');
    }
    return controller;
}