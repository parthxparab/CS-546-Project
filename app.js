const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path')
//const staticFiles = express.static(__dirname + "/public");
//const publicPath = path.resolve(__dirname, "public");
//app.use(express.static(publicPath))
const handlebars = require('express-handlebars');
const port = 3000;
const session = require('express-session')
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/users')(app);
const configRoutes = require('./routes');
configRoutes(app);
//app.use("/public", staticFiles);

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(session({
    name: 'PayDay',
    secret: 'payroll done right!',
    resave: false,
    saveUninitialized: true
  }))



app.listen(port, () => console.log(`Final project app listening on ${port}!`));