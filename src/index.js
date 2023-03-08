import "dotenv/config";
import "./passport/passport-configuration.js";

import Express  from "express";
import morgan from "morgan";
import routes from "./v1/routes/routes.js";
import session from "express-session";

import { dbConnection }  from "./db/databaseConnection.js";

const app = Express();

//database connection
dbConnection( process.env.DB_URL );

//middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

//morgan
app.use(morgan("combined"));

//session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));

//passport
// app.use(passport.initialize());
// app.use(passport.session());


//routes
app.use('/API/v1',routes);

export default app;