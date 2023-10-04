const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/MyDatabase")

const userSchema = new mongoose.Schema({
    state: String,
    district: String,
    temple: String,
    url: String,
    img:String
})

const userModel = mongoose.model('temples',userSchema)

app.get('/gettemples', async (req,res)=>{
    try{
        const data = await userModel.find()
        res.json(data)
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'server err'})
    }
})

app.listen(3001, () => {
    console.log('server is running')
})
