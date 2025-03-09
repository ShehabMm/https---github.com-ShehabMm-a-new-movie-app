import React from 'react'
import { Client } from "appwrite";

export default function Appwrite() {
    const appwriteId = import.meta.env.VITE_APPWRITE_ID


    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')    // Your API Endpoint
        .setProject('<PROJECT_ID>')                // Your project ID
        ;


    console.log(appwriteId)

}
return (
    <div>Appwrite</div>
)
}
