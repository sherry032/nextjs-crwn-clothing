import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart/cartSlice"
import Image from "next/image"
import classes from "./product-card.module.scss"
const ProductCard = ({product})=>{
    const {name, price, imageUrl}= product
    const dispatch = useDispatch()
    // const {addCartItems} = useContext(CartContext)
    const addToCartHandler=()=>{
        dispatch(cartActions.addCartItems(product))
    }
    return(
        <div className={classes["product-card-container"]}>
            <Image className="img" src={imageUrl} alt={name} width="300px" height="350px"/>
            <div className={classes.footer}>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartHandler}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard