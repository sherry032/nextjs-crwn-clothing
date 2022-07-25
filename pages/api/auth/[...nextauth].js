import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { verifyPassword } from "../../../utils/auth/auth"
import { connectToDatabase } from "../../../utils/db/db"


export default NextAuth({
    session:{
        jwt: true
    },
    providers:[
        CredentialsProvider({         
          async authorize(credentials){
            const client = await connectToDatabase()
            const db = client.db()
            const usersCollection = db.collection("users")
            const user = await usersCollection.findOne({email: credentials.email})
            if(!user) {
                client.close()
                throw new Error("No user found!")}
            const isValid = await verifyPassword(credentials.password, user.password)
            if(!isValid) {
                client.close()
                throw new Error("Could not log you in")}
                client.close()
            return {
                email: user.email
            }
            
          }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
          })
    ],
    
})