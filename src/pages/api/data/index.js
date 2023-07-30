const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pc:mM9jc35ZBiPY1vyi@cluster0.cqu6n.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const componentscCollection = client.db("pc").collection("components")
    if (req.method === "GET") {
      const components = await componentscCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: components })
    }
  }
  catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;