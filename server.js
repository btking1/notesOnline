import Express from 'express';
// import path from 'path';
import notesRouter from './pages/notesRouter.js';
import apiRouter from './pages/api.js';
import path from 'path';
const __dirname = path.resolve();
const app = Express();

const PORT = process.env.PORT || 3002;
// const pagesFolder = './public';
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(Express.static('public'));

// connect the notes & db router to the app
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes' , (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.use('/notes', notesRouter);
app.use('/api/notes', apiRouter);


app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});