import Express from 'express';
import fs from 'fs';

let router = Express();
router.use(Express.json());
router.route("/")
.get((req, res) => {
    res.sendFile('db.json', { root: './db'})
})
.post((req, res) => {
    // res.sendFile(req.body)
    const data = fs.readFileSync('./db/db.json');
    const json = JSON.parse(data);
    const newTask = req.body;
    json.push(newTask);
    fs.writeFileSync('./db/db.json', JSON.stringify(json));

    res.sendFile('db.json', { root: './db'});
    
})

export default router;