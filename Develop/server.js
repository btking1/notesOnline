import Express from 'express';
import notesRouter from './pages/notesRouter.js';
import apiRouter from './pages/api.js';
const app = Express();

const PORT = 3002;
const pagesFolder = './public';

function logger(req, res, next) {
    console.log(`REQUEST WAS MADE FOR: ${req.url}`);

    next();
}

app.use('/notes', notesRouter);
app.use('/api/notes', apiRouter);

app.get('/', logger, (req, res) => {
    res.sendFile('index.html', { root: pagesFolder });

});



app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});