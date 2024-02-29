import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

app.get('/api', async (req, res) => {
        const { movie } = req.query;

        const client = new MongoClient('mongodb://localhost:27017');
        await client.connect();

        const db = client.db('movies-library');

        // Query MongoDB collection for the movie by name
        const movieDocument = await db.collection('movies').findOne({ 'movies.name': movie });

        res.json(movieDocument);

});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
