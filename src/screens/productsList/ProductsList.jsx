import { useParams } from "react-router-dom"
import { Loader, Filters, Animated, ProductsGrid } from "../../components"
import { useProducts } from "../../hooks"

export const ProductsList = () => {
    
    const { typeID } = useParams();
    const { products, isLoading, setFilters } = useProducts({ typeID });
    
    return (
        isLoading 
        ? <Loader />
        :
        <Animated>
            <Filters onChange={setFilters}/>
            <ProductsGrid products={ products }/>
        </Animated>
    )
}