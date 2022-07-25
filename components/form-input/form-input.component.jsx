import classes from "./form-input.module.scss"

const FormInput = ({label, ...otherProps})=>{

    return(
        <div className={classes.group}>
            <input className={classes["form-input"]} {...otherProps}/>
            {label && (<label className={`${classes["form-input-label"]} ${classes[otherProps.value.length > 0 &&  "shrink"]}`} >{label}</label>)}
        </div>
    )
}

export default FormInput