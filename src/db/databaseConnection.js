import mongoose  from "mongoose";

export async function dbConnection( uri ) {
    try {
        await mongoose.connect(uri, {useNewURlParser: true});
        console.log("Connected to database....");
    }
    catch (err) {
        console.log("\n\n\n\n",err);
    }
}

