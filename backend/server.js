const express = require('express');
const cors = require("cors");
const operationsRouter = require('./routes/operations.js');
const usersRouter = require('./routes/users.js');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`The server has started on port ${PORT}`);
})

//set up routes
app.use('/users', usersRouter);
app.use('/operations', operationsRouter);

