import { useSelector } from "react-redux"
import {selectCartItems, selectTotalPrice} from "../../store/cart/cart.selector"
import CheckoutItem from "../checkout-item/checkout-item.component"
import PaymentForm from "../payment-form/payment-form.component"
import classes from "./checkout.module.scss"
const Checkout = ()=>{
    // const {cartItems, totalPrice } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)
    return(
        <div className={classes["checkout-container"]}>
            <div className={classes["checkout-header"]}>
                <div className={classes["header-block"]}><span>Product</span></div>
                <div className={classes["header-block"]}>Description</div>
                <div className={classes["header-block"]}><span>Size</span></div>
                <div className={classes["header-block"]}>Quantity</div>
                <div className={classes["header-block"]}>Price</div>
                <div className={classes["header-block"]}>Remove</div>
            </div>
            {cartItems.map(item=><CheckoutItem cartItem={item} key={item.id}/>)}
            <span className={classes.total}>Total: ${totalPrice}</span>
            <PaymentForm />
        </div>
    )
}

export default Checkout