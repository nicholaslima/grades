

import mongoose from 'mongoose';

const produto = mongoose.model('produto');

//comentariohhashahsdhasdh
module.exports = {
    async index(request,response){
        const produtos = await produto.find();
        
        return response.json();
    }
}