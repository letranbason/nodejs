import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectBD from './config/connectDB'

require('dotenv').config(); // running process.env.

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectBD();


let port = process.env.PORT || 8001;
//PORT === undefined => PORT = 8000

app.listen(port, () => {
    //call back
    console.log ("Running on the port:" +port)
})