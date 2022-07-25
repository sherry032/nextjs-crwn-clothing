import CategoryItem from "../category-item/category-item.component";
import classes from "./categories.module.scss"
const Categories = ({categories}) =>{
    return(
        <div className={classes["categories-container"]}>
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category} />
      ))}
     
    </div>
    )
}

export default Categories