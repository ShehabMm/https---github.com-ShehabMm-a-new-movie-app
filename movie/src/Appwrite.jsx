import { Client } from "appwrite";
const appwriteId = import.meta.env.VITE_APPWRITE_ID;

export default function Appwrite() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>"); // Your project ID
}
