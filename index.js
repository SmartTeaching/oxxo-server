const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/PayOxxo');
const cors = require('cors');
const port =process.env.PORT|| 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello dev.to!');
  });
app.listen(port, () => {
    console.log("Listening on port: " + port);
});