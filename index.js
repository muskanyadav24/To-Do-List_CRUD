const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todoRoutes');

const server = express();

server.set('view engine', 'ejs');

// middleware
server.use(express.static("assets"));
server.use(bodyParser.urlencoded({ extended: true }));

// routes
server.use('/', todoRoutes);

// server start
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});