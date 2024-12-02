import connectDB from "@/lib/connectDB"
import { RequestModel } from "@/lib/model/RequestModel";

export async function POST(req) {
    await connectDB()
    try {
        const obj = await req.json();
        let newRequest = await new RequestModel({ ...obj });
        newRequest = await newRequest.save();
        return Response.json({
            errr: false,
            msg: "Request Rigister Successfully",
            request: newRequest
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
    const requests = await RequestModel.find();
    return Response.json({
        errr: false,
        msg: "Requests Fetched Successfully",
        requests,
    } , {status: 200})

}


export async function PUT(req) {

}


export async function DELETE(req) {

}