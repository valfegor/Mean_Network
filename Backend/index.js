const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {Database} = require("../Backend/bd/bd");

app=express();

app.use(express.json());
app.use(cors());


Database();

app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))