import classes from "./spinner.module.scss"

const Spinner = () => {
    return (
        <div className={classes["spinner-container"]}>
            <div className={classes["spinner-overlay"]} />
        </div>
    )
}


export default Spinner
