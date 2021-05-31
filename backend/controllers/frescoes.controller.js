const frescoesService = require('../services/frescoes.service');

const get = function(req, res){
    res.send(frescoesService.get(req.params.CODE_INSEE));
}

const getAll = function(req, res){
    res.send(frescoesService.getAll());
}

const getAllByAnneeCreationDesc = function(req, res){
    res.send(frescoesService.getAllByAnneeCreationDesc());
}

const getAllByAnneeCreationAsc = function(req, res){
    res.send(frescoesService.getAllByAnneeCreationAsc());
}


const deleteFersocoes = function(req, res){
    res.send(frescoesService.deleteFersocoes(req.params.CODE_INSEE));
}

module.exports = {
    get,
    getAll,
    getAllByAnneeCreationDesc,
    getAllByAnneeCreationAsc,
    deleteFersocoes
};