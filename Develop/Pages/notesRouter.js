import Express from 'express';

let router = Express.Router();

router.route("/")
.get((req, res) => {
    res.sendFile('notes.html', { root: './public' });
})
.post((req, res) => {
    res.send('HANDLE POST REQUEST')
})


export default router;