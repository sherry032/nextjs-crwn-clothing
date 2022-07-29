import Spinner from "../spinner/spinner.component"
import ProductCard from "../product-card/product-card.component"
import Link from "next/link"
import classes from "./category.module.scss"

const Category = ({category})=>{
    const {title, items} = category
    return(
        <div className={classes["category-container"]}>
        <h2 className={classes.title}>{title.toUpperCase()}</h2>
        <div className={classes.preview}> 
            {items.length !== 0 && items.map((product)=>(
             <ProductCard key={product.id} product={product} category={title}/>
            ))}
        </div>
    </div>
    )
}

export default Category