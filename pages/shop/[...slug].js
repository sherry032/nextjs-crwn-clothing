import Head from 'next/head'
import Image from 'next/image'
import {getCategory} from "../../utils/firebase/firebase.utils"
import classes from "./product.module.scss"
import Button from "../../components/button/button.component"
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { cartActions } from '../../store/cart/cartSlice'

const ProductPage = ({product}) => {
  const {name, imageUrl, price} = product
  const [size, setSize] = useState("")
  console.log(product)
  const dispatch = useDispatch()
  // const {addCartItems} = useContext(CartContext)
  const addToCartHandler=()=>{
      dispatch(cartActions.addCartItems({...product, size}))
  }
  const sizePickHandler = (e) =>{
    setSize(e.target.value)
  }


  return (
    <>
      <Head>
        <title>Lifetime fashion - {name}</title>
        <meta name="description" content={name} />
        <meta property="og:title" content={`Lifetime fashion - ${name}`} key="title" />
      </Head>
      <div className={classes.container}>
        <div className={classes.image}>
          <Image src={imageUrl} alt={name} width="500px" height="500px"/>
        </div>
        <div className={classes.details}>
          <h4 className={classes.title}>{name}</h4>
          <div className={classes.price}>{`$${price}`}</div>
          <div className={classes.description}>Mens minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.</div>
        
        <div className={classes["size-picker"]}>
          <div>Size</div>
          <div className={classes["size-container"]} onChange={sizePickHandler}>
            <div className={classes["size-group"]}>
            <input type="radio" id="8" name="size" value="8" />
            <label htmlFor="size">8</label>
            </div>
            <div className={classes["size-group"]}>
            <input type="radio" id="10" name="size" value="10" />
            <label htmlFor="size">10</label>
            </div>
            <div className={classes["size-group"]}>
            <input type="radio" id="12" name="size" value="12" />
            <label htmlFor="size">12</label>
            </div>
          </div>
          <div>
            <Button type="submit" onClick={addToCartHandler}>Add to Cart</Button>
          </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default ProductPage


export async function getServerSideProps(context) {
  const { params } = context;

  const [category, productId] = params.slug;
  const categoryProducts =  await getCategory(category)
  const product = categoryProducts.items.find(item => item.id === +productId)
  console.log(product)
  return {
    props: {
      product
    }
  }
}

