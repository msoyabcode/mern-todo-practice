import express from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from "cors";
import { ObjectId } from "mongodb";

const app = express();

app.use(express.json());
app.use(cors());


// databse mein data store krne ke liye
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


// database mein jo data store hai usko ui mein dikhane ke liye
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


// koi item delete krne ke liye
app.delete("/delete/:id", async (req, res)=>{
  const db =  await connection()
  const id = req.params.id
  const collection = db.collection(collectionName)
  let deleteItem = await collection.deleteOne({_id: new ObjectId(id)})
  if(deleteItem){
    res.send(deleteItem)
  }else{
    res.send("delte fetch is wrong")
  }
})



app.listen(3000);
