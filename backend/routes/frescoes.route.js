const express = require('express');
const router = express.Router({
    mergeParams: true
});

const frescoesController = require('../controllers/frescoes.controller');

router.route('/')
    .get(frescoesController.getAll);

router.route('/:CODE_INSEE')
    .get(frescoesController.get);

router.route('/desc')
    .post(frescoesController.getAllByAnneeCreationDesc);


router.route('/asc')
    .post(frescoesController.getAllByAnneeCreationAsc);

router.route('/:CODE_INSEE')
    .delete(frescoesController.deleteFersocoes);

module.exports = router;