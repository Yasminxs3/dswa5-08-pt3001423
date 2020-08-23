var contatos = [
    {_id: 1, nome: 'Yasmin', email: 'teste@teste.com'},
    {_id: 2, nome: 'user 2', email: 'user2@gmail.com'},
];

module.exports = function() {
    var controller = {};
    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };
    controller.obtemContato = function(req, res) {
        var idContato = req.params.id;
        var contato = contatos.filter(function(contato){
            return contato._id == idContato;
        })[0];
        contato? res.json(contato) : res.status(404).send('contato não encontrado');
    }
    return controller;
}