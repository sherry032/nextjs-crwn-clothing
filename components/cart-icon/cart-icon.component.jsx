import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Image from "next/image.js"
import { selectTotalCount, selectShowCart } from "../../store/cart/cart.selector.js"
import classes from "./cart-icon.module.scss"
import { cartActions } from "../../store/cart/cartSlice.js"



const CartIcon = ()=>{
    const dispatch = useDispatch()
    const showCart = useSelector(selectShowCart)
    const totalCount = useSelector(selectTotalCount)
    const toggleCartHandler = ()=>{
        dispatch(cartActions.toggleCart(!showCart))
    }
    return(
        <div className={classes["cart-icon-container"]} onClick={toggleCartHandler}>
            <div className={classes["shopping-icon"]}>
                <Image src="/shopping-bag.svg" height="24px" width="24px" alt="shopping cart icon"/>
            </div>
            <span className={classes["item-count"]}>{totalCount}</span>
        </div>
    )
}
export default CartIcon