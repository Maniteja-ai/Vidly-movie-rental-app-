const mongoose = require('mongoose');
const Joi = require('joi');


const Customer = mongoose.model('Customer',new mongoose.Schema(
    {
        isGold: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            minlength: 5,
            maxlength: 20,
            required: true,
        },
        phone: {
            type: String,
            minlength: 5,
            maxlength: 20,
            required: true
        }
    }
));

const validateCustomer = (customer) => {
    const schema = {
        name: Joi.string().min(5).max(5).required(),
        phone: Joi.string().min(5).max(5).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}


module.exports.Customer = Customer;
module.exports.validate = validateCustomer;