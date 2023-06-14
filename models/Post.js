import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,

    },
    lastName:{
        type:String,
    },
    picturePath:{
        type:String,
        default:''
    },
    likes:{
        type:Map,
        of:Boolean
    },
    comments:{
        type:Array,
        default:[]
    },
    location:String,
    description:String,
    userPicturePath:String,
},{timestamps:true})

const Post=mongoose.model("Post",PostSchema)

export default Post;