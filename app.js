const express = require("express");
const ejsLayouts =require('express-ejs-layouts');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_server/views'));
app.use(ejsLayouts);

app.use('/public',express.static(path.join(__dirname,'public')));

require('./app_server/routes/routeManager')(app);
app.listen(5500); 