var ID_CONTATO_INC = 3;

// var contatos = [
//     {_id: 1, nome: 'Yasmin', email: 'teste@teste.com'},
//     {_id: 2, nome: 'user 2', email: 'user2@gmail.com'},
// ];

module.exports = function(app) {
    var Contato = app.models.contato;
    var controller = {};
    controller.listaContatos = function(req, res) {
        Contato.find().exec().then(
            function(contatos) {
                res.json(contatos);
            },
            function(erro) {
                console.log(erro);
                res.status(500).json(erro);
            }
        );
        // res.json(contatos);
    };
    controller.obtemContato = function(req, res) {
        // console.log('Selecionou o contato: ' + req.params.id);
        var _id = req.params.id;
        Contato.findById(_id).exec().then(
            function(contato) {
                if(!contato) throw new Error("contato não encontrado");
                res.json(contato);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro)
            }
        );
        // var contato = contatos.filter(function(contato) {
        //     return contato._id == idContato;
        // })[0];

        // contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
    };
    controller.removeContato = function(req, res) {
        var _id = req.params.id;
        Contato.deleteOne({"_id": _id}).exec().then(
            function() {
               res.end();
            },
            function(erro) {
                res.status(404).json(erro)
            }
        );
    };

    controller.salvaContato = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec().then(
                function(contato) {
                    res.json(contato);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro)
                }
            );
        } else {
            Contato.create(req.body).then(
                function(contato) {
                    res.status(201).json(contato);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro)
                }
            );
        }
     
        // var contato = req.body;
        // contato = contato._id ? atualiza(contato) : adiciona(contato);

        // res.json(contato);
    };

    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    };

    function atualiza(contatoAlterar) {
        contatos = contatos.map(function(contato) {
            if(contato._id == contatoAlterar._id) {
                contato = contatoAlterar;
            }
            return contato;
        });
        return contatoAlterar;
    };
    return controller;
};