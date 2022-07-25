import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import classes from "./auth.module.scss"
import { useEffect, useState } from "react"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Spinner from "../../components/spinner/spinner.component"
const AuthPage = ()=>{
    const router = useRouter()
    const [isLoading, setIsLoading]= useState(true)
    useEffect(()=>{
        getSession().then(session=> {
            if(session){
                router.replace("/")
            }
            setIsLoading(false)
        })
    },[router])
return(
    <div className={classes["authentication-container"]}>
        <SignInForm />
        <SignUpForm />
        {isLoading && <Spinner />}
    </div>
)
}

export default AuthPage