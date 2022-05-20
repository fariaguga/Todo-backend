const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const taskRouter = require('./routers/task.router');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());


app.use('/task', taskRouter);



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));