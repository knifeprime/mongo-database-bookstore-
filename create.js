const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; 
const dbName = 'Bookstore';


const client = new MongoClient(url);

async function main() {
  try {

    await client.connect();
    console.log("Connected successfully to MongoDB server");

   
    const db = client.db(dbName);

   
    const collection = db.collection('author');


    const authorData = [
      { Anime: "Naruto", popularity: "10/10", story: "10/10" },
      { Anime: "Komi can't communicate", popularity: "7/10", story: "10/10" },
      { Anime: "Kaiju no 8", popularity: "11/10", story: "9/10" },
      { Anime: "King of thorn",popularity : "6/10", story: "10/10" },
      { Anime: "Dandadan", popularity: "11/10",story: "8/10" },
    ];

    const insertResult = await collection.insertMany(authorData);
    console.log("Inserted documents:", insertResult.insertedIds); 

  } finally {
 
    await client.close();
  }
}

main().catch(console.error);