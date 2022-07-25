import { useRouter } from "next/router"
import Category from "../../components/category/category.component"
import {getCategory, getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils"
const CategoryPage = ({categoryProducts})=>{
    return(
        <Category category={categoryProducts}/>
    )
}

export default CategoryPage

export const getStaticProps= async(context)=>{
    const {category}= context.params
    const categoryProducts =  await getCategory(category)
     return {
         props:{
            categoryProducts
         },
         revalidate: 1800,
     }
 }

export const getStaticPaths = async()=>{
    const allProducts = await getCategoriesAndDocuments()
    const paths = allProducts.map(cato => ({
        params: { category:  cato.title}
           }))
    return {
        paths,
        fallback:'blocking'
    }
}