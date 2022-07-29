
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart/cartSlice"
import classes from "./checkout-item.module.scss"

const CheckoutItem =({cartItem})=>{
    const {name, price, qty, imageUrl, id, size} = cartItem
    const dispatch = useDispatch()
    // const {addCartItems, decrementCartItems, removeCartItem} = useContext(CartContext)
    const addCartItemsHandler = ()=>{
        dispatch(cartActions.addCartItems(cartItem))
    }
    const decrementCartItemsHandler = ()=>{
        dispatch(cartActions.decrementCartItems(cartItem))
    }
    const removeCartItemHandler = ()=>{
        dispatch(cartActions.removeCartItem(cartItem))
    }
return(
    <div className={classes["checkout-item-container"]}>
        <div className={classes["image-container"]}>
            <img src={imageUrl} alt={name} />
        </div>
        <span className={classes.name}>{name}</span>
        <span className={classes.size}>{size}</span>
        <span className={classes.quantity}>
            <div className={classes.arrow} onClick={decrementCartItemsHandler}>&#10094;</div>
            <span className={classes.value}>{qty}</span>
            <div className={classes.arrow} onClick={addCartItemsHandler}>&#10095;</div>
        </span>
        <span className={classes.price}>${(price * qty).toFixed(0)}</span>
        <div className={classes["remove-button"]} onClick={removeCartItemHandler}>&#10005;</div>
    </div>
)
}

export default CheckoutItem