import { mongoose } from "mongoose";

const user = process.env.DB_USER || "luisFernandez ";
const password = process.env.DB_PASSWORD || "kIQFjY9ymmW9ONyE";
const url = process.env.DB_URL || `mongodb+srv://${user}:${password}@cluster0.qa5humq.mongodb.net/?retryWrites=true&w=majority`;

export async function databaseConnection() {
    await mongoose.connect(url, ()=> {
        console.log("Database connected");
    });
}

databaseConnection().catch((err) => {
    console.log(err);
});