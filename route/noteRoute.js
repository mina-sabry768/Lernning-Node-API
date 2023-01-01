var express = require('express');
var noteCtrl = require('../controller/noteController');

const router = express.Router();

router.get('/notes', noteCtrl.getAllNotes);
router.post('/notes/save', noteCtrl.saveNotes);
router.put('/notes/update', noteCtrl.updateNotes);
router.delete('/notes/delete/:noteId', noteCtrl.deleteNotes);

module.exports = router