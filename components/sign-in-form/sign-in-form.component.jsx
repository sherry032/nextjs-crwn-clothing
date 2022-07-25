import { useState} from "react"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import classes from "./sign-in-form.module.scss"
const SignInForm = ()=>{
    const defaultFormFields={
        email: "",
        password:""
    }
    const [formFields, setFormFields]= useState(defaultFormFields)
    const {email, password} = formFields
    const router = useRouter()
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
          const result =await signIn("credentials", {
            redirect: false,
            email,
            password })
            if(!result.error) router.replace("/shop")
        }catch(err){
           console.log(err)
            }
        resetFormFields()
    }
    const handleChange = (event)=>{
        const {name, value} = event.target
        setFormFields({...formFields, [name]:value})
    }

    const signInWithGoogle =async ()=>{
        await signIn("google")
    }

    return(
        <div className={classes["sign-in-container"]}>
            <h2>Already have an account?</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" required onChange={handleChange} name="email" id="email" value={email} label="Email"/>
                <FormInput type="password" required onChange={handleChange} name="password" id="password" value={password} label="Password"/>
                <div className={classes["buttons-container"]}>
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm