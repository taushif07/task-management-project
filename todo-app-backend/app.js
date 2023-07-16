require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRouter = require('./routes/task');


const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/todos',todoRouter.router);


app.listen(process.env.PORT, function() {
  console.log("Server started on port 8080");
});