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
    const query = {};
    const status = req?.nextUrl?.searchParams?.get("status");
    if (status && status != "all") {
      query.status = status;
    }
    console.log("status in backend =>" , status );
    
    
    const requests = await RequestModel.find(query).populate("user");
    return Response.json({
        error: false,
        msg: "All Requests Fetched Successfully",
        requests,
    }, { status: 200 })
}

export async function PUT(req) {
    await connectDB()
    try {
        const obj = await req.json();
        let { id, status } = obj
        const updated = await RequestModel.findOneAndUpdate(
            {
                _id: id
            },
            {
                status: status
            }
        ).exec()

        return Response.json({
            error: false,
            msg: "Requests Updated Successfully",
            requests: updated
        }, { status: 200 })
    }
    catch (err) {
        return Response.json({
            error: true,
            msg: "Something Went Wrong",
        }, { status: 500 })
    }
    // Implement update logic if needed
}

export async function DELETE(req) {
    // Implement delete logic if needed
}

