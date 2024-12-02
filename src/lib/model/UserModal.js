import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    role: { type: String, default: "user" , enum: ["user", "doctor", "admin"] },
    doctorInfo: {
        fees: Number,
        hospital: String,
        time: String,
        bio: String,
        specialization: String,
        gender: String,
    }
});


export const UserModel = mongoose.models?.Users || mongoose.model("Users" , userSchema)