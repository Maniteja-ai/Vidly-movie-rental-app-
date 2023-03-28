const mongoose =  require('mongoose');
const Joi = require('joi');
const number = require('joi/lib/types/number');
const {genreSchema} = require('./genres');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre:genreSchema,
    numberInStock: {
        type:Number,
        min:0,
        max:255
    },
    dailyRentalRate: {
        type:Number,
        min:0,
        max: 255
    }
});
const Movie = mongoose.model('Movie',schema);

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(3).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number(),
        dailyRentalRate: Joi.number()
    }

    return Joi.validate(movie,schema);

}

exports.validate = validateMovie;
exports.Movie = Movie;