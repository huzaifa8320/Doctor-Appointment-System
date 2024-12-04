import DoctorAdminRequests from "@/components/DoctorAdminRequests";
import { auth } from "../../../../auth";

export default async function AdminDoctorRequst() {
    const session = await auth()
    return(
        <DoctorAdminRequests session={session}/>
    )
}