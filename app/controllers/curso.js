var ID_CONTATO_INC = 3;

// var cursos = [
//     {_id: 1, nome: 'Yasmin', email: 'teste@teste.com'},
//     {_id: 2, nome: 'user 2', email: 'user2@gmail.com'},
// ];

module.exports = function(app) {
    var Curso = app.models.curso;
    var controller = {};
    controller.listaCursos = function(req, res) {
        Curso.find().exec().then(
            function(cursos) {
                res.json(cursos);
            },
            function(erro) {
                console.log(erro);
                res.status(500).json(erro);
            }
        );
        // res.json(cursos);
    };
    controller.obtemCurso = function(req, res) {
        // console.log('Selecionou o curso: ' + req.params.id);
        var _id = req.params.id;
        Curso.findById(_id).exec().then(
            function(curso) {
                if(!curso) throw new Error("curso não encontrado");
                res.json(curso);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro)
            }
        );
        // var curso = cursos.filter(function(curso) {
        //     return curso._id == idContato;
        // })[0];

        // curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
    };
    controller.removeCurso = function(req, res) {
        var _id = req.params.id;
        Curso.deleteOne({"_id": _id}).exec().then(
            function() {
               res.end();
            },
            function(erro) {
                res.status(404).json(erro)
            }
        );
    };

    controller.salvaCurso = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Curso.findByIdAndUpdate(_id, req.body).exec().then(
                function(curso) {
                    res.json(curso);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro)
                }
            );
        } else {
            Curso.create(req.body).then(
                function(curso) {
                    res.status(201).json(curso);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro)
                }
            );
        }
    };

    function adiciona(cursoNovo) {
        cursoNovo._id = ++ID_CONTATO_INC;
        cursos.push(cursoNovo);
        return cursoNovo;
    };

    function atualiza(cursoAlterar) {
        cursos = cursos.map(function(curso) {
            if(curso._id == cursoAlterar._id) {
                curso = cursoAlterar;
            }
            return curso;
        });
        return cursoAlterar;
    };
    return controller;
};