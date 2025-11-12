const express = require('express');
const router = express.Router();
const profController = require('../controller/profController');

router.get('/', profController.getAllProf);
router.get('/:id/turma', profController.getListTurma);
router.get('/departamento/:departamento', profController.getListProfDep);
router.post('/:id/turma', profController.postTurma);
router.get('/:id', profController.getProfId);   
router.delete('/:id', profController.deleteProf);
router.put('/:id', profController.updateProf);
router.post('/', profController.createProf);

module.exports = router;

