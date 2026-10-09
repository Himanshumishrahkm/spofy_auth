
const mongoose = require('mongoose');

const ConnectDataBase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('DataBase is connected...');
    } catch (error) {
        console.log(error);
        
    }
    
}

module.exports = ConnectDataBase;