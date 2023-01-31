import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import session from 'express-session';
import {AppDataSource} from "./src/data-source";

const app = express();
mongoose.set('strictQuery', true);
AppDataSource.initialize().then(() => {
    console.log('Content database success!')
})

app.use(fileUpload({
    createParentPath: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
    resave:true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: {maxAge: 60000}}));
app.use('', router);

app.listen(8080, () => {
    console.log('Server is running http://localhost:8080/home');
})