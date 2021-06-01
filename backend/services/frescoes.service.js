
const data = require('../models/Frescoes');
const fs = require('fs');
const Frescoes = require('../models/Frescoes');

const get = function(ID){
    return getAll().find(frescoes => frescoes.ID == ID);
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

const deleteFersocoes = function(ID){
    data.Frescoes = data.Frescoes.splice(frescoes =>        
        frescoes.ID == ID, 1);
    return {message:"Frescoes with CODE_INSEE "+ ID+ " was deleted"};
}

module.exports = {
    get,
    getAll,
    getAllByAnneeCreationDesc,
    getAllByAnneeCreationAsc,
    deleteFersocoes
};