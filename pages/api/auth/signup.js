import { connectToDatabase } from "../../../utils/db/db"
import { hashPassword } from "../../../utils/auth/auth"
const handler = async (req, res) =>{
    if(req.method !== "POST")   return
    const data = req.body
    const {email, password, displayName} = data

    if(!email || !email.includes("@") || !password || password.trim().length < 7){
        res.status(422).json({message: "Invalid input"})
        return
    }

    const client = await connectToDatabase()
    const db = client.db()

    const existingUser = await db.collection("users").findOne({email})

    if(existingUser){
        res.status(422).json({message: "User exists!"})
        client.close()
        return
    }
    const hashedPassword = await hashPassword(password)
    const result = await db.collection("users").insertOne({email, password: hashedPassword, displayName})

    res.status(201).json({message: "Created user!", status:"success", title:"Success"})
    client.close()
}

export default handler