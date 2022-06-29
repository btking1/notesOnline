import Express from 'express';
import path from 'path';

const app = Express();

const PORT = 3002;

app.use(Express.static(path.join('./public')));

app.get('/', (req, res) => {
    res.sendFile(path.join('./public/index.html'));

});

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});