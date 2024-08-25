import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookSchema from './book.models.js'
import cors from 'cors'

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')

app.get('/', (req, res)=>{
    res.send('hello from server')
})

app.post('/create', async(req, res)=>{
    try {
        let data = new bookSchema(req.body);
        await data.save();
        res.send(data);
    } catch (error) {
        console.log('cant create :', error); 
    }
    
});

app.get('/list', async(req, res)=>{
    let data = await bookSchema.find();
    res.send(data);
})

app.get('/list/:id', async(req, res)=>{
    let data = bookSchema.findById(req.params.id);
    res.send(data);
})

app.put('list/:id', async(req, res)=>{
    try {
        let updateData = await bookSchema.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send(updateData);
    } catch (error) {
        console.log("error in updating", error);
    }  
})

app.delete('/delete/:id', async(req, res)=>{
    try{
        let deleteData = await bookSchema.findByIdAndDelete(req.params.id);
        res.send(deleteData);
    }catch(error){
        console.log('data not found', error);    
    }
    
})

app.listen(4000, ()=>{
    console.log('server running on port 4000');
})