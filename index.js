//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import router from "./routes/index.js";
//import cors
import cors from "cors";
//import  formidable
import bodyParser from "body-parser";
// construct express function
const app = express();
const url =
  "mongodb://cek:cek@ac-jerdfyn-shard-00-00.ilaftrl.mongodb.net:27017,ac-jerdfyn-shard-00-01.ilaftrl.mongodb.net:27017,ac-jerdfyn-shard-00-02.ilaftrl.mongodb.net:27017/?ssl=true&replicaSet=atlas-7alwli-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("database connected"));

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("Membuat API");
});

// listening to port
app.listen(8000, () => console.log("Server Running at port: 8000"));

//ahdhsashd
