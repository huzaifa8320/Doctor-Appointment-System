import mongoose from "mongoose";

const { Schema } = mongoose;

const requestSchema = new Schema({
    user: {type: mongoose.Types.ObjectId , ref : "Users"},
    status :{type : String , default: "pending" , enum : [
         "pending" ,
          "accepted",
          "rejected"
        ]},
    name: String,
    bio: String,
    hospital: String,
    fees: Number,
    specialist: String,
    gender: String,
    experience: String,
    contact: Object,
    certifiedFrom: String,
    availability: Array
});


export const RequestModel = mongoose.models?.Requests || mongoose.model("Requests" , requestSchema)