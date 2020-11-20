const express = require('express');
const Tesseract = require('tesseract.js');
const router = express.Router();
router.post('/',function(req,res){
    var url = req.body.url;
    console.log("hello");
    const loadData = async ()=>{
        console.log("hello");
        const result = await Tesseract.recognize(
            url,
          'eng',
        );
        res.render('imagetext.ejs',{imageurl:url,
            imagetext:result.data.text});
      }

      loadData();
});

module.exports = router;