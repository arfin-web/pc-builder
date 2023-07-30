import { MongoClient, ObjectId } from 'mongodb';

const uri = "mongodb+srv://pc:mM9jc35ZBiPY1vyi@cluster0.cqu6n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run(req, res) {
    try {
        await client.connect();
        const componentsCollection = client.db("pc").collection("components");

        const { id } = req.query;

        if (!id) {
            res.status(400).json({ message: "ID parameter is missing", status: 400 });
            return;
        }

        const component = await componentsCollection.findOne({ _id: new ObjectId(id) });

        if (!component) {
            res.status(404).json({ message: "Component not found", status: 404 });
            return;
        }

        res.status(200).json({ message: "success", status: 200, data: component });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: "Internal server error", status: 500 });
    } finally {
        await client.close();
    }
}

export default run;