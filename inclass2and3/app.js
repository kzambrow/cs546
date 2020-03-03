// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const express = require('express');
const app = express();
const configRoutes = require('./routes');


configRoutes(app);

app.listen(3000, () => {
    console.log("server is started");
    console.log("Routes will be running on http://localhost:3000");
});