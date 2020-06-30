const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routes
app.use('/api', require('./routes'));

app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});