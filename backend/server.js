const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const operationsRouter = require('./routes/operations.js');
const usersRouter = require('./routes/users.js');

//server set up
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`The server has started on port ${PORT}`);
})

//routes set up
app.use('/auth', usersRouter);
app.use('/operations', operationsRouter);

