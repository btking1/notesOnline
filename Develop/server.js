import Express from 'express';
// import path from 'path';
import notesRouter from './pages/notesRouter.js';
import apiRouter from './pages/api.js';
const app = Express();

const PORT = 3002;
const pagesFolder = './public';

app.use(Express.static(pagesFolder))

// connect the notes & db router to the app

app.use('/notes', notesRouter);
app.use('/api/notes', apiRouter);

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});