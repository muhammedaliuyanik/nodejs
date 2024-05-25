const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const authRouter = require('./routes/auth.js')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', authRouter); //api => register 

//db();
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("server is running on port 8000")
})