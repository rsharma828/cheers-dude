// const app = require("./app");
// const path = require("path");
// const express = require("express");
// //handle uncaught error
// // process.on("uncaughtException" , (err) => {
// //     console.log(`Error : ${err.message}`);
// //     console.log(`shutting down the server for handling uncaught exception`);
// // })

// // get config file 
// if(process.env.Node_ENV !== "PRODUCTION"){
//     require("dotenv").config({
//         path : " backend/config/.env"
//     })
// }

// app.use(express.static(path.join(__dirname,"../../frontend/dist")));

// // connect database


// // create server
// const server = app.listen(process.env.PORT,() => {
//     // console.log(`Shutting down the server for ${err.message}`);
//     console.log(`Shutting down the server for unhandled promise rejection`);

//     server.close(() => {
//         process.exit(1);
//     })
// })


const express = require('express'); // Add this line to require express
const path = require('path'); // Add this line to require path
const app = require('./app');

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server for handling uncaught exception');
    process.exit(1);
});

// Get config file
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'backend/config/.env'
    });
}

app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Connect database (You should add your database connection code here)

// Create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server for unhandled promise rejection');

    server.close(() => {
        process.exit(1);
    });
});
