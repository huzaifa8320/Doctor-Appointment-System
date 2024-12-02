import connectDB from "@/lib/connectDB"
import { UserModel } from "@/lib/model/UserModal";

export async function POST(req) {
    await connectDB()
    try {
        const obj = await req.json();
        let newUser = await new UserModel({ ...obj });
        newUser = await newUser.save();
        return Response.json({
            errr: false,
            msg: "User Rigister Successfully",
            user: newUser
        } , {status: 201})
    } catch (e) {
        return Response.json({
            errr: true,
            msg: "Something Went Wrong",
        } , {status: 400})
    }
}


export async function GET(req) {
    await connectDB()
    const users = await UserModel.find();
    return Response.json({
        errr: false,
        msg: "User Fetched Successfully",
        users,
    } , {status: 200})

}


export async function PUT(req) {

}


export async function DELETE(req) {

}