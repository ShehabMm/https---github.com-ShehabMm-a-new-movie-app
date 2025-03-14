import { Client } from "appwrite";
const appwriteId = import.meta.env.VITE_APPWRITE_ID;
const dataBaseId=import.meta.env.VITE_APPWRITE_DATABASE;
const collectionID = import.meta.env.VITE_APPWRITE_COLLECTION;



export default function Appwrite() {
  console.log({appwriteId,dataBaseId,collectionID})
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>"); // Your project ID
}
