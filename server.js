/**
 * Created by root on 9/12/17.
 */
var express = require('express');

// Create new app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function( req,res,next){
    if (req.header['x-forwarded-proto'] === 'http') {
    next();
    }else {
    res.redirect('http://'+req.hostname+req.url)
    }
});
// Telling it folder to serve
app.use(express.static('public'));

app.listen(PORT,function() {
    console.log('Express server is up on PORT 3000 ' + PORT)
});

