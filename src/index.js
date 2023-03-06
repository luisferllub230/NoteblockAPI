import "dotenv/config";
import Express  from "express";
import morgan from "./middlewares/morgan.js";
import routes from "./routes/routes.js";
import {dbConnection}  from "./db/databaseConnection.js";
import session from "express-session";

const app = Express();

//database connection
dbConnection( process.env.DB_URL );

//middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(morgan);
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));


//routes
app.use(routes);

export default app;