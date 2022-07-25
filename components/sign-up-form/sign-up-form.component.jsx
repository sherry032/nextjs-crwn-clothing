import { useState} from "react"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import classes from "./sign-up-form.module.scss"
import { createUser } from "../../utils/auth/auth"
import { useRouter } from "next/router"
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const router = useRouter()
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(password !== confirmPassword) {
            alert("passwords do not match")
            resetFormFields()
            return
        }
        try{
          const result = await createUser(email, password, displayName)
          if(result.status === "success") router.replace("/shop")
        }catch(err){
            console.log(err)
        }
        
        resetFormFields()
    }
    const handleChange=(event)=>{
        const {name, value} = event.target
        setFormFields({...formFields, [name]:value})
    }


    return(
        <div className={classes["sign-up-container"]}>
            <h2>Don&apos;t have an account?</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" value={displayName} label="Display Name" onChange={handleChange}/>
                <FormInput type="email" required onChange={handleChange} name="email" value={email} label="Email"/>
                <FormInput type="password" required onChange={handleChange} name="password" value={password} label="Password"/>
                <FormInput type="password" required onChange={handleChange} name="confirmPassword" id="confirmPassword" value={confirmPassword} label="Confirm Password"/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm