const express = require('express')
const path = require('path');
var cors = require('cors');

const app = express()

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('*',function (req, res) {
    res.redirect('/');
});

// Start the app predictfoot
app.listen(process.env.PORT || 3500, function() {
    console.log("dashboard predicfoot live  started")
})