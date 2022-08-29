import { ExampleImpl } from "./class";
import { MongoClient } from "mongodb";

(async () => {
    const client = new MongoClient("mongodb://localhost:27017/example");
    const _instance = new ExampleImpl(client.db("broken"));
})();
