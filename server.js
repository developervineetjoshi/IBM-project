const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const getupload = require('./routes/uploadget');
const postupload = require('./routes/uploadpost');
const data = require('./routes/data');
const app = express();
const fs = require('fs');
const fsExtra = require('fs-extra')



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(path.join(__dirname +'/uploads')));
app.use("/upload",getupload);
app.use("/data",data);
app.use("/upload",postupload);

app.get('/',function(req,res){
        fsExtra.emptyDirSync('./uploads');
        res.render('home.ejs');    
});

app.listen(process.env.PORT||3000,function(){
    console.log("Server is running");
  });