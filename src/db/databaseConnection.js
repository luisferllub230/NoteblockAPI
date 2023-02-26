import mongoose  from "mongoose";

export async function dbConnection( uri ) {

    console.log("\n\n\n\n\n",uri,"\n\n\n\n\n")

    try {
        await mongoose.connect(uri);
        console.log("Connected to database....");
    }
    catch (err) {
        console.log("\n\n\n\n",err);
    }
}

