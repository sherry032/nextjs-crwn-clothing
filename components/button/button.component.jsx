import Spinner from "../spinner/spinner.component"
import classes from "./button.module.scss"
export const BUTTON_TYPE_CLASSES={
    base: "base",
    google: "google-sign-in",
    inverted: "inverted"
}


const Button=({children,isLoading, buttonType, ...otherProps})=>{
    return(
        <button className={`${classes["button-container"]} ${BUTTON_TYPE_CLASSES[buttonType]}`} disabled={isLoading} {...otherProps}>{isLoading ? <Spinner />: children}</button>
    )
}

export default Button