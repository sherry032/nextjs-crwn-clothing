import Button from "../button/button.component"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import {cartActions} from "../../store/cart/cartSlice"
import CartItem from "../cart-item/cart-item.component"
import { useRouter } from "next/router"
import classes from "./cart-dropdown.module.scss"
const CartDropdown=()=>{
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const router = useRouter()
    const goToCheckoutHandler = ()=>{
        dispatch(cartActions.toggleCart(false))
        router.push("/checkout")
    }
return(
    <div className={classes["cart-dropdown-container"]}>
        {cartItems.length === 0 ? <p className={classes["empty-message"]}>Your cart is empty.</p> :
        (<div className={classes["cart-items"]}>
            {cartItems.map(item=><CartItem key={item.id} cartItem={item}/>)}
        </div>)}
        <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
)
}

export default CartDropdown