
import ProductCard from "../../components/product-card/product-card.component"
import Link from "next/link"
import classes from "./category-preview.module.scss"
const CategoryPreview = ({title, products})=>{
    return(
                    <div className={classes["category-preview-container"]}>
                        <h2><Link href={`/shop/${title.toLowerCase()}`}>
                            <a className={classes.title}>
                            {title.toUpperCase()}
                            </a>
                            </Link></h2>
                        <div className={classes.preview}> 
                            {products.slice(0, 4).map((product)=>(
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </div>
    )
}

export default CategoryPreview