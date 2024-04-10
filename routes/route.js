import express from 'express'
import Content from '../Model/dataModel.js'
import Count from '../Model/countModel.js';

const userRoute = express.Router()

var add = 0
var update = 0

userRoute.get('/count', async (req, res) => {
    
    try {
        res.status(200).json({add,update});
    } catch (error) {
        console.error('Error fetching count:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
userRoute.get('/all',async(req,res)=>{
    try{
     const  data = await Content.find()
    // console.log(data)
      res.json({data})
    }catch(error){
        console.log(error)
        res.status(500).json({error:error})
    }
})

userRoute.post('/post',async(req,res)=>{
    try{
     const {content} = req.body
      
     await Content.create({content,action:'add'})
     add++
     await Count.updateOne({}, { $inc: { addCount: 1 } });
     res.json({message:'Posted Successfully'})
    }catch(error){
        console.log(error)
     res.status(500).json({error:error})
    }
})

userRoute.put('/update/:id',async(req,res)=>{
try{
 const {id} = req.params
 const {content} = req.body
 await Content.findByIdAndUpdate(id,{content,action:'update'})
 update++
 await Count.updateOne({}, { $inc: { updateCount: 1 } });
 res.json({message:'Data updated Succcessfully'})
}catch(error){
  res.status(500).json({error:error.message})
}
})



export default userRoute