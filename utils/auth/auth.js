import {hash, compare} from "bcryptjs"

export const hashPassword =async (password)=>{
   const hashedPassword = await hash(password, 12)

   return hashedPassword
}

export const verifyPassword = async (password, hashedPassword)=>{
    const isValid = await compare(password, hashedPassword)
    return isValid
}



export const createUser = async (email, password, displayName)=>{
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body:JSON.stringify({email, password, displayName}),
            headers:{
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        
        if(!response.ok){
            throw new Error (data.message || "something went wrong")
        }

        return data
   
}