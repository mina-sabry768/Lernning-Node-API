var generator = require('../Util/generator');
var memstorage = require('../Util/memory.storage');
var model = require('../model/note.model');

exports.getAllNotes = (req, res) =>{
    /*
    memstorage.store.setItem(seqId, "1st_key");
    var seqId_2 = generator.generate();
    memstorage.store.setItem(seqId_2, "2nd_Key");
    var keys = memstorage.getKeys(memstorage.store);
    */
    //var Note = model.Note;
    //var noteObj = new Note(seqId, "sad", "dwww", "dwdwddw", new Date());
    
    var values = memstorage.getValues(memstorage.store);
    console.log("Values........" + JSON.stringify(values));
    return res.status(200).send(JSON.stringify(values));
};

exports.saveNotes = (req, res) =>{
    var seqId   = generator.generate();
    var createdBy = 'admin';
    var createdOn = new Date();

    var title = req.body.title;
    var content = req.body.content;
    
    if(!title || !content){
        return res.status(500).send('title Or content Should Not be Empty..');
    }
    var Note = model.Note;
    var noteObj = new Note(seqId, title, content, createdBy, createdOn);
    memstorage.store.setItem(seqId, noteObj);
    return res.status(201).send('Successfully Save Note...');
};

exports.updateNotes = (req, res) =>{
    var createdBy = 'admin';
    var createdOn = new Date();

    var noteId   = req.body.noteId;
    var title = req.body.title;
    var content = req.body.content;
    
    if(!noteId){
        return res.status(500).send({error: 'NoteID Should Not be Empty..'});
    }
    if( !title || !content){
        return res.status(500).send({error: 'NoteID or Title or Content Should Not be Empty..'});
    }

    var noteItem = memstorage.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({error: 'noteId Not Exist....'});
    }


    var Note = model.Note;
    var noteObj = new Note(noteId, title, content, createdBy, createdOn);
    memstorage.store.setItem(noteId, noteObj);
    return res.status(200).send('Successfully Update Note...');
};

exports.deleteNotes = (req, res) =>{
    var noteId = req.params.noteId;

    var noteItem = memstorage.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({error: 'noteId Not Exist....'});
    }
    memstorage.store.removeItem(noteId);
    return res.status(200).send('Successfully delete Note...'); 

};

