import mongoose from "mongoose"
const componentSchema = new mongoose.Schema({
    content :{type:String,required:true}
});
const Content = mongoose.model('Component', componentSchema);

export default Content
