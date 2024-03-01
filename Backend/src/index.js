import express from 'express';
import {client, ObjectId} from './mongo.js';

const app = express();
app.use(express.json());

app.get('/api/movieList', async (req, res) => {

    const database = client.db('movie-data');
    const movies = database.collection('movie');

    const movie = await movies.find({}).toArray();
    res.json(movie);
});

app.post('/api/movieForm', async (req, res) => {
    
    const database = client.db('movie-data');
    const movies = database.collection('movie');

    const newMovie = req.body;
    console.log(newMovie);
    const result = await movies.insertOne(newMovie);
    res.json(result);
});

app.delete('/api/movieList/:id', async (req, res) => {
    const database = client.db('movie-data');
    const movies = database.collection('movie');

    console.log(req.params.id);
    const id = req.params.id;  
    const result = await movies.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});