import { MongoClient } from "mongodb"

const url = "mongodb+srv://soyabmohd:soyabmohd%40123@cluster0.imsh0lw.mongodb.net/?retryWrites=true&w=majority";
 
const databaseName = "todo-app"
export const collectionName = "tasks"

const client = new MongoClient(url)

export const connection = async () =>{
   await client.connect()
   const db =  await client.db(databaseName)
   return db
}

