const app = require("./app");

//handle uncaught error
process.on("uncaughtException" , (err) => {
    console.log(`Error : ${error.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
})

// get config file 
if(process.env.Node_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path : " backend/config/.env"
    })
}

app.use(express.static(path.join(__dirname,"../../frontend/dist")));

// connect database


// create server
const server = app.listen(process.env.PORT,() => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    })
})