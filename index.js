const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const taskRouter = require('./routers/task.router');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors());


app.use('/task', taskRouter);



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));