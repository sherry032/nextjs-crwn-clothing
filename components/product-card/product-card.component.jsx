import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart/cartSlice"
import Image from "next/image"
import classes from "./product-card.module.scss"
import Link from "next/link"
const ProductCard = ({product, category})=>{
    const {name, price, imageUrl, id}= product
    const dispatch = useDispatch()
    // const {addCartItems} = useContext(CartContext)
    const addToCartHandler=()=>{
        dispatch(cartActions.addCartItems(product))
    }
    console.log(`/${category}/${id}`)
    return(
        <Link className={classes["product-card-container"]} href={`/shop/${category}/${id}`}>
            <a>
            <Image className={classes.img} src={imageUrl} alt={name} width="300px" height="350px"/>
            <div className={classes.footer}>
                <span className={classes.name}>{name}</span>
                <span className={classes.price}>{` $${price}`}</span>
            </div>
            </a>
        </Link>
    )
}

export default ProductCard