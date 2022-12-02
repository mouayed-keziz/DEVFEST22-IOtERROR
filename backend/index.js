import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import UserRouter from './DB-Routes/UserRouter';

dotenv.config();

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/devfest22-IOtERRORdb', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex:true,
});


app.use("/api/users", UserRouter);





app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send("Hello World!")
})

app.listen(process.env.PORT || 5000)