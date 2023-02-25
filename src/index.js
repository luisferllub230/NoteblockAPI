import Express  from "express";
import morgan from "./middlewares/morgan.js";
import routes from "./routes/routes.js";
import {databaseConnection} from "./db/databaseConection.js"

const app = Express();

databaseConnection();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use(morgan);
app.use(routes);

export default app;