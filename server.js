const express = require('express');
const { readdirSync } = require("fs");
const cors = require("cors");
const http = require('http');
require("dotenv").config();
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

if(process.env.NODE_ENV !== 'production') require('dotenv').config();


readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const server = http.createServer(app);

server.listen(7000, () => {
    console.log('server is listening at port 7000')
})
