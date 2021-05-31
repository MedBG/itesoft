
const data = require('../models/Frescoes');
const fs = require('fs');
const Frescoes = require('../models/Frescoes');

const get = function(CODE_INSEE){
    return getAll().find(frescoes => frescoes.CODE_INSEE == CODE_INSEE);
}

const getAll = function(){
    return data.Frescoes;
}

const getAllByAnneeCreationDesc = function(){    
    var byDate = getAll();
    return byDate.sort((a, b) => {
        if (a.ANNEE_CREATION < b.ANNEE_CREATION)
          return -1;
        if (a.ANNEE_CREATION > b.ANNEE_CREATION)
          return 1;
        return 0;
      });
}

const getAllByAnneeCreationAsc = function(){    
    var byDate = getAll();
    return byDate.sort((a, b) => {
        if (a.ANNEE_CREATION > b.ANNEE_CREATION)
          return -1;
        if (a.ANNEE_CREATION < b.ANNEE_CREATION)
          return 1;
        return 0;
      });
}

const deleteFersocoes = function(CODE_INSEE){
    data.Frescoes = data.Frescoes.splice(frescoes =>        
        frescoes.CODE_INSEE == CODE_INSEE);
    
    return "Object with CODE_INSEE "+ CODE_INSEE+ " was deleted";
}

module.exports = {
    get,
    getAll,
    getAllByAnneeCreationDesc,
    getAllByAnneeCreationAsc,
    deleteFersocoes
};