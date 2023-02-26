import "dotenv/config";
import Express  from "express";
import morgan from "./middlewares/morgan.js";
import routes from "./routes/routes.js";
import {dbConnection}  from "./db/databaseConnection.js";

const app = Express();


dbConnection( process.env.DB_URL );

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use(morgan);
app.use(routes);

export default app;