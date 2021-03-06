const mongoose = require('mongoose');
var validator = require("email-validator");

var employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
    
})

// custom validation for email

employeeSchema.path('email').validate((val) => {
    return validator.validate(val);
},'Invalid Email');

mongoose.model('Employee',employeeSchema);