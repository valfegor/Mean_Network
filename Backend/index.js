const express = require("express");
const cors = require('cors');
require("dotenv").config();


const Role = require("./routes/role");
const User = require("./routes/user");
app=express();

app.use(express.json());
app.use(cors());
app.use('/api/role',Role);
app.use('/api/user',User)
const{Database_connect} = require('../Backend/bd/bd');


app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))

Database_connect();