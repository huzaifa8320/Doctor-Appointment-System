import ApplyDoctorForm from "@/components/Apply-Doctor-Form";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";


export default async function ApplyDoctor() {
  const session = await auth()
  if (!session) {
    redirect('/account')
  }
  return (
    <ApplyDoctorForm session ={session} />
  )
}