import CategoryPreview from "../../components/category-preview/category-preview.conponent"
import { Fragment } from "react"
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils"
import { useEffect } from "react"
import { productsActions } from "../../store/products/productsSlice"
import { useDispatch } from "react-redux"
const ShopPage = ( {productsArr} )=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productsActions.setProducts(productsArr))
    }, [productsArr, dispatch])
    return(
        <Fragment>
        {productsArr && productsArr.map(category=> <CategoryPreview key={category.title} title={category.title} products={category.items}/>
        )}
        </Fragment>
    )
}

export default ShopPage

export const getStaticProps= async()=>{
   const productsArr =  await getCategoriesAndDocuments()
    return {
        props:{
            productsArr
        },
        revalidate: 1800,
    }
}

