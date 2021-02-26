const express = require('express');
const cors = require("cors");
const operationsRouter = require('./routes/operations.js')

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`The server has started on port ${PORT}`);
})

app.get('/', (req,res)=> {
    res.send('Hello world')
})
//set up routes
app.use('/operations', operationsRouter);

