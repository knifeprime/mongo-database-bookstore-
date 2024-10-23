const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017'; 
const dbName = 'Bookstore';

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
  try {
  
    await client.connect();
    console.log("Connected successfully to MongoDB server");


    const db = client.db(dbName);

    const collection = db.collection('author'); 


        const updateResult = await collection.updateOne({ name: "Evan" }, { $set: { genre: "comic" } });
        console.log("Updated document count:", updateResult.modifiedCount);

} finally {
   
    await client.close();
  }
}


main().catch(console.error);