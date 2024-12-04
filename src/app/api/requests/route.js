import connectDB from "@/lib/connectDB"
import { RequestModel } from "@/lib/model/RequestModel";

export async function POST(req) {
    await connectDB()
    try {
        const obj = await req.json();
        
        // Check if the user already has a pending or approved request
        const existingRequest = await RequestModel.findOne({ 
            user: obj.user, 
            status: { $in: ['pending', 'approved'] } 
        });

        if (existingRequest) {
            return Response.json({
                error: true,
                msg: "You already have a pending or approved request",
            }, { status: 400 })
        }

        let newRequest = await new RequestModel({ ...obj });
        newRequest = await newRequest.save();
        return Response.json({
            error: false,
            msg: "Request Registered Successfully",
            request: newRequest
        }, { status: 201 })
    } catch (e) {
        return Response.json({
            error: true,
            msg: "Something Went Wrong",
        }, { status: 400 })
    }
}

export async function GET(req) {
    await connectDB()
    const requests = await RequestModel.find();
    return Response.json({
        error: false,
        msg: "All Requests Fetched Successfully",
        requests,
    }, { status: 200 })
}

export async function PUT(req) {
    // Implement update logic if needed
}

export async function DELETE(req) {
    // Implement delete logic if needed
}

