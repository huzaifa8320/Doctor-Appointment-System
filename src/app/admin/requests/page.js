import DoctorAdminRequests from "@/components/DoctorAdminRequests";
import { auth } from "../../../../auth";
import { getRequest } from "@/action/requests";

export default async function AdminDoctorRequst({ searchParams }) {
    const {status} = searchParams;
    console.log('status', status);
    
    
    const requests = await getRequest(status)
    const session = await auth()
    return(
        <DoctorAdminRequests requests={requests} session={session}/>
    )
}