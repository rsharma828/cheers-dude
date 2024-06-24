const mongoose = require("mongoose");
 
const connectDatabase = async () => {
    const response = await mongoose.connect(process.env.DB_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })

    console.log(`mongodb connected with server : ${response.connection.host}`);
    
}

module.exports = connectDatabase;