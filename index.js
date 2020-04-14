const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/PayOxxo');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', routes);

const port = 3001;
app.listen(port, () => {
    console.log("Listening on port: " + port);
});