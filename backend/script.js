const app = require('./src/app');
const connectDB = require('./src/Database/Db');

connectDB();

app.listen(3000,(res,req)=>
{
    console.log('Server is running...');
    
})