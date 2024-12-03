import connectDB from "@/lib/connectDB";
import { UserModel } from "@/lib/model/UserModal";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 

async function handleRigister(obj){
await connectDB()
const user =  await UserModel.findOne({email: obj.email})
if (user) {
    return user;
}
else{
    let newUser = await UserModel(obj);
    newUser = await newUser.save();
    return newUser
}
} 

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        let obj ={
            firstName: profile.given_name,
            lastName: profile. family_name,
            email: profile.email,
            picture: profile.picture,
        }
        const user = await handleRigister(obj)
        return {user}
      }
    },

    async jwt({ token }) {
        const user = await handleRigister({email: token.email})
        console.log("user in jwt" , user);
        token.role = user.role;
        token._id = user._id
        return token
      },
      session({ session, token }) {
        session.user._id = token._id
        session.user.role = token.role
        return session
      },
    },
  

  })