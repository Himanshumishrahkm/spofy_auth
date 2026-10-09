const mongoose = require('mongoose');


    
    const UserSchema = new mongoose.Schema({
        username :{
            type : String,
            require : true,
            unique : true
        },

        email: { 
            type: String,
            index: true,
            unique: true, 
            required: true
         },
        password: {
            type: String,
            required: true 
        },

        role : { type : String , enum : ['artist' , 'user'] , require : true , default : "user"}
        
    })

    const UserModel = mongoose.model('user',UserSchema);

    module.exports = UserModel;