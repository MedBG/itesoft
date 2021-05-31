const express = require('express');
const frescoes = require('./frescoes.route');
//const swagger = require('./swagger.route');

const router = express.Router();

router.use('/frescoes', frescoes);
//router.use('/', swagger);

router.get('/', (req, res) => res.send('ITESOFT Node API Version1'));




module.exports = router;