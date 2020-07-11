
import mongoose from 'mongoose';

const produtoModel = new mongoose.Schema({
    name:{
        type: string
    },
    category:{
        type: string
    }
});


const produto = mongoose.model('produtos',produtoModel);

module.exports = produto;


