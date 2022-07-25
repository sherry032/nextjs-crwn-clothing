import Image from "next/image"
import classes from "./cart-item.module.scss"
const CartItem = ({cartItem})=>{
    const {name, qty, imageUrl, price}=cartItem
    return(
        <div className={classes["cart-item-container"]}>
            <Image src={imageUrl} alt={name} width="80px" height="80px"/>
            <div className={classes["item-details"]}>
                <span className={classes.name}>{name}</span>
                <span className="price">
                    {qty} X ${price}
                </span>
            </div>
            
        </div>
    )
}

export default CartItem