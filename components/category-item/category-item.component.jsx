import Link from "next/link"
// import {CategoryContainer, CategoryBodyContainer, BackgroundImage} from "./category-item.styles"
import classes from "./category-item.module.scss"
const CategoryItem = ({category})=>{
    const {imageUrl, title} = category
    return(
      <Link href={`/shop/${title.toLowerCase()}`} >
        <a className={classes["category-container"]}>
        <div style={{backgroundImage:`url(${imageUrl})`}} className={classes["background-image"]}/>
        <div className={classes["category-body-container"]}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </a>
      </Link>
    )
}

export default CategoryItem