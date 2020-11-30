const app = require('express')();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysqlConnection = require('./db');
const routes = require("./routes/routes");
const morgan = require('morgan');




app.set('port', 3000);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());



app.use('/', routes)


app.listen(app.get('port'), () => {
  console.log(`server on port`, app.get(`port`))
});
