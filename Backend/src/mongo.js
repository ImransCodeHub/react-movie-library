import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

//import 'dotenv/config';

 
// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URI;
// const uri = "mongodb://0.0.0.0:27017";


if (!uri || !uri.startsWith('mongodb://')) {
    console.error('Invalid MongoDB URI:', uri);
    process.exit(1); // Exit the process if URI is invalid
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

export { client, ObjectId };
