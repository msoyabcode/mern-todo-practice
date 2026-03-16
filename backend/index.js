import express from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/add-data", async (req, res) => {
  const db = await connection();
  const collection = await db.collection(collectionName);

  const result = await collection.insertOne(req.body);
  if (result) {
    res.send(result);
  } else {
    res.send("not working");
  }
});

app.get("/tasks", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);

  const result = await collection.find().toArray();
  if (result) {
    res.send(result);
  } else {
    res.send("your are fectching the API incorrectly");
  }
});

app.listen(3000);
