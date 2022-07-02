import Express from 'express';
import fs from 'fs';

let router = Express();
// router.use(Express.json());
// router.use(Express.urlencoded({
//     extended:true
// }))

// router servers the db api for the notes app
router.route("/")
.get((req, res) => {
    res.sendFile('db.json', { root: './db'})
})
.post((req, res) => {

    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newNote = {
        id: notes.length + 1,
        title: req.body.title,
        text: req.body.text
    }
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.send(newNote);
    res.send('HANDLE POST REQUEST')
}
)
.put((req, res) => {
    res.send('HANDLE PUT REQUEST')
}
)
// delete a note by id
router.delete('/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newNotes = notes.filter(note => note.id !== parseInt(req.params.id));
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.send(newNotes);
}
)
//update selected note
router.put('/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newNotes = notes.map(note => {
        if (note.id === parseInt(req.params.id)) {
            note.title = req.body.title;
            note.text = req.body.text;
        }
        return note;
    }
    );
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.send(newNotes);
}
)

//make saved notes green
router.put('/:id/green', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newNotes = notes.map(note => {
        if (note.id === parseInt(req.params.id)) {
            note.color = 'green';
        }
        return note;
    }
    );
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.send(newNotes);
}
)




export default router;




